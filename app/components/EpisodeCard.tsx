import Link from "next/link";
import Icon from "./icons";
import type { Episode } from "@/lib/podcast";
import { formatDateShort, formatDuration, truncate } from "@/lib/format";

export default function EpisodeCard({ episode }: { episode: Episode }) {
  const date = formatDateShort(episode.pubDate);
  const duration = formatDuration(episode.duration);

  return (
    <Link href={`/episodios/${episode.slug}`} className="ep-card">
      {episode.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="ep-card-cover" src={episode.image} alt="" loading="lazy" />
      ) : (
        <div className="ep-card-cover-fallback"><Icon name="play" /></div>
      )}
      {episode.episodeNumber ? <span className="ep-card-num">EP {episode.episodeNumber}</span> : null}
      <h3>{episode.title}</h3>
      <p className="ep-card-desc">{truncate(episode.descriptionText, 110)}</p>
      <div className="ep-card-meta">
        <span className="play"><Icon name="play" /></span>
        <span>{[date, duration].filter(Boolean).join(" · ")}</span>
      </div>
    </Link>
  );
}
