"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const NAV_IDS = [
  { id: "inicio", key: "home" as const },
  { id: "nuestra-historia", key: "history" as const },
  { id: "gastronomia", key: "gastronomy" as const },
  { id: "quienes-somos", key: "about" as const },
  { id: "ubicacion", key: "location" as const },
  { id: "contacto", key: "contact" as const },
] as const;

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.history.pushState(null, "", `/#${sectionId}`);
}

export default function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      if (!isHome) return;
      e.preventDefault();
      scrollToSection(sectionId);
    },
    [isHome]
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!isHome) return;
      e.preventDefault();
      scrollToSection("inicio");
    },
    [isHome]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/#inicio"
            onClick={handleLogoClick}
            className="font-serif text-2xl sm:text-3xl font-semibold text-foreground tracking-tight hover:opacity-90 transition-opacity"
          >
            Cafe Le Gris
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {NAV_IDS.map(({ id, key }) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="text-sm uppercase tracking-widest text-foreground/85 hover:text-foreground transition-colors"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label="Menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            className="md:hidden py-4 border-t border-border/50 flex flex-col gap-3"
            aria-label="Menú móvil"
          >
            {NAV_IDS.map(({ id, key }) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={(e) => {
                  handleNavClick(e, id);
                  setMobileOpen(false);
                }}
                className="text-sm uppercase tracking-widest text-foreground/85 hover:text-foreground"
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
