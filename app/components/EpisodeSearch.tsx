"use client";

import { useMemo, useState } from "react";
import EpisodeCard from "./EpisodeCard";
import Icon from "./icons";
import type { Episode } from "@/lib/podcast";

export default function EpisodeSearch({ episodes }: { episodes: Episode[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return episodes;
    return episodes.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.descriptionText.toLowerCase().includes(q)
    );
  }, [query, episodes]);

  return (
    <>
      <div className="search-wrap">
        <Icon name="search" />
        <input
          className="search-input"
          type="search"
          placeholder="Buscar por título ou assunto…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Buscar episódios"
        />
      </div>

      <p className="search-count">
        {filtered.length} {filtered.length === 1 ? "episódio" : "episódios"}
        {query ? ` para “${query}”` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="empty-state">Nenhum episódio encontrado. Tente outra busca.</div>
      ) : (
        <div className="ep-grid">
          {filtered.map((ep) => (
            <EpisodeCard key={ep.id} episode={ep} />
          ))}
        </div>
      )}
    </>
  );
}
