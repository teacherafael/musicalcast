import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../components/icons";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/podcast";
import { formatDate, formatDuration, sanitizeHtml, truncate } from "@/lib/format";

export const revalidate = 3600;

export async function generateStaticParams() {
  const episodes = await getAllEpisodes();
  return episodes.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);
  if (!episode) return { title: "Episódio não encontrado" };
  const desc = truncate(episode.descriptionText, 160);
  return {
    title: episode.title,
    description: desc,
    openGraph: {
      title: episode.title,
      description: desc,
      type: "article",
      images: episode.image ? [{ url: episode.image }] : undefined,
    },
  };
}

export default async function EpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = await getEpisodeBySlug(slug);
  if (!episode) notFound();

  const date = formatDate(episode.pubDate);
  const duration = formatDuration(episode.duration);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 880 }}>
        <Link href="/episodios" className="ep-back">
          <Icon name="arrowLeft" /> Voltar para os episódios
        </Link>

        <div className="ep-header">
          {episode.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="ep-header-cover" src={episode.image} alt="" />
          ) : null}
          <div>
            {episode.episodeNumber ? <div className="featured-tag">Episódio {episode.episodeNumber}</div> : null}
            <h1>{episode.title}</h1>
            <div className="ep-header-meta">
              {date ? <span><Icon name="calendar" style={{ width: 15, height: 15, verticalAlign: -2, marginRight: 6 }} />{date}</span> : null}
              {duration ? <span><Icon name="clock" style={{ width: 15, height: 15, verticalAlign: -2, marginRight: 6 }} />{duration}</span> : null}
            </div>
            {episode.link ? (
              <a href={episode.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                Ouvir no Spotify <Icon name="external" />
              </a>
            ) : null}
          </div>
        </div>

        {episode.audioUrl ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <audio className="player" controls preload="none" src={episode.audioUrl} />
        ) : null}

        {episode.descriptionHtml ? (
          <div className="ep-prose" dangerouslySetInnerHTML={{ __html: sanitizeHtml(episode.descriptionHtml) }} />
        ) : (
          <p className="ep-prose">{episode.descriptionText}</p>
        )}
      </div>
    </section>
  );
}
