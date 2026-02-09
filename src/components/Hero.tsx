"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToContent = () => {
    document.getElementById("nuestra-historia")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-center"
    >
      <Image
        src="/cafe_le_gris_web/portada.jpg"
        alt="Cafe Le Gris"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-white/95 mb-4 flex items-center gap-4">
          <span className="h-px w-12 bg-white/60" aria-hidden />
          {t.hero.est}
          <span className="h-px w-12 bg-white/60" aria-hidden />
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight max-w-4xl leading-tight mb-6">
          {t.hero.headline}
        </h1>
        <p className="font-sans text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 font-medium tracking-wide hover:bg-accent/90 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {t.hero.cta}
        </a>
      </div>

      <button
        type="button"
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Desplazar hacia abajo"
      >
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </section>
  );
}
