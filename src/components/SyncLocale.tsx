"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LOCALE_TO_LANG: Record<string, string> = {
  es: "es",
  en: "en",
  fr: "fr",
  pt: "pt",
};

export default function SyncLocale() {
  const { locale } = useLanguage();

  useEffect(() => {
    const lang = LOCALE_TO_LANG[locale] ?? "es";
    document.documentElement.lang = lang;
  }, [locale]);

  return null;
}
