"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HistorySection() {
  const { t } = useLanguage();

  return (
    <section
      id="nuestra-historia"
      className="bg-cream py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-accent-muted mb-3">
          {t.history.label}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-medium border-b-2 border-accent-muted pb-2 inline-block">
          {t.history.title}
        </h2>
        <div className="mt-6 flex justify-center" aria-hidden>
          <svg
            className="w-6 h-6 text-accent-muted"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <p className="mt-8 text-foreground/90 leading-relaxed">
          {t.history.p1}
        </p>
        <p className="mt-6 text-foreground/90 leading-relaxed">
          {t.history.p2}
        </p>
        <p className="mt-10 font-serif italic text-foreground/80">
          {t.history.signature}
        </p>
      </div>
    </section>
  );
}
