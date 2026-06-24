import Link from "next/link";
import Icon from "./components/icons";
import EpisodeCard from "./components/EpisodeCard";
import { getAllEpisodes, getLatestEpisode } from "@/lib/podcast";
import { formatDate, formatDuration, truncate } from "@/lib/format";
import { SITE, PLATFORMS, TEAM, SPECIAL_GUESTS, SUPPORT } from "@/lib/config";

export default async function Home() {
  const [episodes, latest] = await Promise.all([getAllEpisodes(), getLatestEpisode()]);
  const recent = episodes.filter((e) => e.slug !== latest?.slug).slice(0, 6);

  return (
    <>
      {/* HERO ------------------------------------------------------------ */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-since">No ar desde 2015</div>
          <h1>O <span className="c">primeiro</span> podcast sobre <span className="c">musicais</span> do Brasil</h1>
          <p className="hero-sub">{SITE.description}</p>
          <div className="hero-actions">
            <Link href="/episodios" className="btn btn-primary">
              <Icon name="play" /> Ouça os episódios
            </Link>
            <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Icon name="heart" /> Apoie no Catarse
            </a>
          </div>
        </div>
      </section>

      {/* ONDE OUVIR ------------------------------------------------------ */}
      <section id="ouvir" className="section band">
        <div className="container">
          <div className="eyebrow">Onde ouvir</div>
          <h2 className="section-title">Escolha sua plataforma favorita</h2>
          <p className="section-lead">
            Estamos em todos os principais agregadores de podcast. É só dar o play onde você já escuta.
          </p>
          <div className="platforms">
            {PLATFORMS.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="platform">
                <Icon name={p.icon} /> {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMO EPISÓDIO + RECENTES ------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Episódios</div>
          <h2 className="section-title">Para ouvir agora</h2>

          {latest ? (
            <div className="featured">
              {latest.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="featured-cover" src={latest.image} alt="" />
              ) : (
                <div className="featured-cover-fallback"><Icon name="play" /></div>
              )}
              <div>
                <div className="featured-tag">Último episódio</div>
                <h3>{latest.title}</h3>
                <p className="featured-desc">{truncate(latest.descriptionText, 220)}</p>
                <div className="featured-meta">
                  {[formatDate(latest.pubDate), formatDuration(latest.duration)].filter(Boolean).join(" · ")}
                </div>
                <Link href={`/episodios/${latest.slug}`} className="btn btn-primary btn-sm">
                  <Icon name="play" /> Ouvir episódio
                </Link>
              </div>
            </div>
          ) : (
            <p className="section-lead">Os episódios aparecem aqui assim que o feed for carregado.</p>
          )}

          {recent.length > 0 && (
            <>
              <div style={{ height: 36 }} />
              <div className="ep-grid">
                {recent.map((ep) => (
                  <EpisodeCard key={ep.id} episode={ep} />
                ))}
              </div>
              <div style={{ textAlign: "center", marginTop: 36 }}>
                <Link href="/episodios" className="btn btn-ghost">
                  Ver todos os episódios <Icon name="arrowRight" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* EQUIPE --------------------------------------------------------- */}
      <section id="equipe" className="section band">
        <div className="container">
          <div className="eyebrow">Quem faz</div>
          <h2 className="section-title">A equipe</h2>
          <p className="section-lead" style={{ marginBottom: 36 }}>
            Um time apaixonado por musicais, que se reúne pra debater teatro com profundidade e bom humor.
          </p>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div key={member.name} className="team-card">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="team-photo" src={member.photo} alt={member.name} />
                ) : (
                  <div className="team-initials">{initials(member.name)}</div>
                )}
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <a className="team-ig" href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noopener noreferrer">
                  @{member.instagram}
                </a>
              </div>
            ))}
          </div>
          {SPECIAL_GUESTS.length > 0 && (
            <p className="special-guests">
              <strong>Participações especiais:</strong> {SPECIAL_GUESTS.join(", ")}.
            </p>
          )}
        </div>
      </section>

      {/* APOIE ---------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <div className="support">
            <div>
              <div className="eyebrow">Clube do Musical</div>
              <h2 className="section-title">Faça parte e ajude o podcast a continuar</h2>
              <p>{SUPPORT.clubeTexto}</p>
              <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <Icon name="heart" /> Quero contribuir
              </a>
            </div>
            <div className="support-badge" aria-hidden="true">♪</div>
          </div>
        </div>
      </section>

      {/* MCDB ----------------------------------------------------------- */}
      <section id="mcdb" className="section band">
        <div className="container" style={{ textAlign: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://res.cloudinary.com/drk7o6h0p/image/upload/v1782171496/copy_of_mcdb_sembirlho_utr4xp.png"
            alt="MCDb – Musical Cast Database"
            style={{ height: 72, width: "auto", margin: "0 auto 16px", display: "block" }}
          />
          <p className="section-lead" style={{ maxWidth: 480, margin: "0 auto 28px" }}>
            O maior arquivo digital colaborativo do teatro musical brasileiro.
          </p>
          <a
            href="https://mcdb.musicalcast.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Acessar o MCDb <Icon name="arrowRight" />
          </a>
        </div>
      </section>
    </>
  );
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}