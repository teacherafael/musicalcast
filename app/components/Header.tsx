import Link from "next/link";
import { SUPPORT } from "@/lib/config";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" aria-label="Musical Cast — página inicial" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Musical Cast" style={{ height: 32, width: "auto" }} />
        </Link>
        <nav className="nav">
          <Link href="/#ouvir" className="nav-hide">Onde ouvir</Link>
          <Link href="/episodios">Episódios</Link>
          <Link href="/#equipe" className="nav-hide">Equipe</Link>
          <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Apoie
          </a>
        </nav>
      </div>
    </header>
  );
}