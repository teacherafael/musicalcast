import Link from "next/link";
import Icon from "./icons";
import { CONTACT, SUPPORT } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div style={{ maxWidth: 320 }}>
            <img src="/logo.png" alt="Musical Cast" className="logo-img-footer" />
            <p style={{ color: "var(--text-soft)", fontSize: 15 }}>
              O primeiro podcast sobre musicais do Brasil. Episódios novos toda semana.
            </p>
            <div className="footer-soc">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
              <a href={`mailto:${CONTACT.email}`} aria-label="E-mail"><Icon name="mail" /></a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navegar</div>
            <div className="footer-links">
              <Link href="/">Início</Link>
              <Link href="/episodios">Episódios</Link>
              <Link href="/#ouvir">Onde ouvir</Link>
              <Link href="/#equipe">Equipe</Link>
              <a href="https://mcdb.musicalcast.com.br" target="_blank" rel="noopener noreferrer">MCDb</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Contato</div>
            <div className="footer-links">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">@musicalcast</a>
              <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer">Apoie no Catarse</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2015–{year} Musical Cast. Feito com amor pelo teatro musical.
        </div>
      </div>
    </footer>
  );
}
