"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./icons";
import { SUPPORT } from "@/lib/config";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Musical Cast — página inicial" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Musical Cast" className="logo-img" />
        </Link>

        <nav className="nav nav-desktop">
          <Link href="/#ouvir">Onde ouvir</Link>
          <Link href="/episodios">Episódios</Link>
          <Link href="/#equipe">Equipe</Link>
          <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer" className="nav-cta">
            Apoie
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {open && (
        <nav className="nav-mobile">
          <Link href="/#ouvir" onClick={() => setOpen(false)}>Onde ouvir</Link>
          <Link href="/episodios" onClick={() => setOpen(false)}>Episódios</Link>
          <Link href="/#equipe" onClick={() => setOpen(false)}>Equipe</Link>
          <a href={SUPPORT.catarseUrl} target="_blank" rel="noopener noreferrer" className="nav-cta nav-cta-mobile" onClick={() => setOpen(false)}>
            Apoie
          </a>
        </nav>
      )}
    </header>
  );
}