import { XMLParser } from "fast-xml-parser";
import { RSS_URL } from "./config";
import { slugify, stripHtml } from "./format";

export type Episode = {
  id: string;
  slug: string;
  title: string;
  descriptionHtml: string;
  descriptionText: string;
  pubDate: string;
  duration: string | number | undefined;
  audioUrl: string;
  image: string;
  link: string;
  episodeNumber?: number;
  season?: number;
};

export type PodcastMeta = {
  title: string;
  description: string;
  image: string;
  link: string;
};

// fast-xml-parser devolve texto puro ou objetos quando há atributos/CDATA.
// Este helper extrai sempre uma string limpa.
function asText(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return String(value);
  if (typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if ("#text" in obj) return asText(obj["#text"]);
  }
  return "";
}

function attr(value: unknown, name: string): string {
  if (value && typeof value === "object") {
    const v = (value as Record<string, unknown>)[`@_${name}`];
    if (v !== undefined) return String(v);
  }
  return "";
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
});

// Busca o XML do feed. revalidate = recarrega no máximo a cada 1 hora,
// então episódios novos aparecem sozinhos sem precisar publicar de novo.
async function fetchXml(): Promise<string | null> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "MusicalCast-Site/1.0" },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    // Se o feed estiver fora do ar, o site não quebra — só mostra vazio.
    return null;
  }
}

let cache: { episodes: Episode[]; meta: PodcastMeta } | null = null;

async function loadFeed(): Promise<{ episodes: Episode[]; meta: PodcastMeta }> {
  const xml = await fetchXml();
  const fallbackMeta: PodcastMeta = { title: "Musical Cast", description: "", image: "", link: "" };
  if (!xml) return cache ?? { episodes: [], meta: fallbackMeta };

  let parsed: any;
  try {
    parsed = parser.parse(xml);
  } catch {
    return cache ?? { episodes: [], meta: fallbackMeta };
  }

  const channel = parsed?.rss?.channel;
  if (!channel) return cache ?? { episodes: [], meta: fallbackMeta };

  const meta: PodcastMeta = {
    title: asText(channel.title) || "Musical Cast",
    description: stripHtml(asText(channel.description)),
    image:
      attr(channel["itunes:image"], "href") ||
      asText(channel?.image?.url) ||
      "",
    link: asText(channel.link),
  };

  const rawItems = channel.item ? (Array.isArray(channel.item) ? channel.item : [channel.item]) : [];

  const usedSlugs = new Set<string>();
  const episodes: Episode[] = rawItems.map((item: any, index: number) => {
    const title = asText(item.title) || `Episódio ${index + 1}`;
    const descriptionHtml = asText(item["content:encoded"]) || asText(item.description) || "";
    const epNumberRaw = asText(item["itunes:episode"]);
    const epNumber = epNumberRaw ? parseInt(epNumberRaw, 10) : undefined;

    // Gera slug único pra URL
    let slug = slugify(title);
    if (!slug) slug = `episodio-${index + 1}`;
    if (usedSlugs.has(slug)) slug = `${slug}-${epNumber ?? index + 1}`;
    usedSlugs.add(slug);

    const guid = asText(item.guid) || asText(item.link) || slug;

    return {
      id: guid,
      slug,
      title,
      descriptionHtml,
      descriptionText: stripHtml(descriptionHtml),
      pubDate: asText(item.pubDate),
      duration: asText(item["itunes:duration"]) || undefined,
      audioUrl: attr(item.enclosure, "url"),
      image: attr(item["itunes:image"], "href") || meta.image,
      link: asText(item.link),
      episodeNumber: epNumber,
      season: asText(item["itunes:season"]) ? parseInt(asText(item["itunes:season"]), 10) : undefined,
    };
  });

  const result = { episodes, meta };
  cache = result;
  return result;
}

export async function getAllEpisodes(): Promise<Episode[]> {
  const { episodes } = await loadFeed();
  return episodes;
}

export async function getPodcastMeta(): Promise<PodcastMeta> {
  const { meta } = await loadFeed();
  return meta;
}

export async function getLatestEpisode(): Promise<Episode | null> {
  const episodes = await getAllEpisodes();
  return episodes[0] ?? null;
}

export async function getEpisodeBySlug(slug: string): Promise<Episode | null> {
  const episodes = await getAllEpisodes();
  return episodes.find((e) => e.slug === slug) ?? null;
}
