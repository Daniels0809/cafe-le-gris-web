"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const ITEMS = [
  {
    key: "philosophy" as const,
    icon: (
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        clipRule="evenodd"
      />
    ),
  },
  {
    key: "values" as const,
    icon: (
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    ),
  },
  {
    key: "commitment" as const,
    icon: (
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    ),
  },
] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="quienes-somos"
      className="bg-cream py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-medium text-center border-b-2 border-accent-muted pb-2 inline-block w-full">
          {t.about.title}
        </h2>
        <div className="mt-6 flex justify-center" aria-hidden>
          <div className="h-0.5 w-16 bg-accent-muted" />
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {ITEMS.map(({ key, icon }) => (
            <div key={key} className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/30 text-accent mb-4"
                aria-hidden
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  {icon}
                </svg>
              </div>
              <h3 className="font-serif text-xl text-foreground font-medium">
                {t.about[key]}
              </h3>
              <p className="mt-3 text-foreground/85 leading-relaxed text-sm sm:text-base">
                {key === "philosophy"
                  ? t.about.philosophyText
                  : key === "values"
                    ? t.about.valuesText
                    : t.about.commitmentText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
