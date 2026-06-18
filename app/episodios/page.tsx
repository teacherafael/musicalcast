import type { Metadata } from "next";
import EpisodeSearch from "../components/EpisodeSearch";
import { getAllEpisodes } from "@/lib/podcast";

export const metadata: Metadata = {
  title: "Episódios",
  description: "Todos os episódios do Musical Cast, o primeiro podcast sobre musicais do Brasil.",
};

export const revalidate = 3600;

export default async function EpisodiosPage() {
  const episodes = await getAllEpisodes();

  return (
    <section className="section">
      <div className="container">
        <div className="eyebrow">Arquivo completo</div>
        <h1 className="section-title">Todos os episódios</h1>
        <p className="section-lead" style={{ marginBottom: 36 }}>
          Mais de uma década de conversas sobre teatro musical. Use a busca pra achar um episódio ou musical específico.
        </p>
        {episodes.length === 0 ? (
          <div className="empty-state">
            Os episódios serão carregados a partir do feed assim que o site estiver no ar.
          </div>
        ) : (
          <EpisodeSearch episodes={episodes} />
        )}
      </div>
    </section>
  );
}
