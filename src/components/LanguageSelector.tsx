"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/i18n/translations";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "pt", label: "PT" },
];

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Idioma">
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`
            min-w-[2.25rem] px-2 py-1.5 text-xs font-medium uppercase tracking-wide
            transition-colors duration-200
            ${
              locale === code
                ? "bg-accent text-white"
                : "bg-transparent text-foreground/90 hover:text-foreground hover:bg-white/10"
            }
          `}
          aria-pressed={locale === code}
          aria-label={label}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
