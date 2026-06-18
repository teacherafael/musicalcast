import type { MetadataRoute } from "next";
import { getAllEpisodes } from "@/lib/podcast";
import { SITE_URL } from "@/lib/config";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const episodes = await getAllEpisodes();

  const episodeUrls: MetadataRoute.Sitemap = episodes.map((e) => ({
    url: `${SITE_URL}/episodios/${e.slug}`,
    lastModified: e.pubDate ? new Date(e.pubDate) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/episodios`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...episodeUrls,
  ];
}
