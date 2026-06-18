import Link from "next/link";
import { SUPPORT } from "@/lib/config";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Musical Cast — página inicial">
          MUSICAL<span className="c">CAST</span>
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
