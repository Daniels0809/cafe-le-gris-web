"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MenuPdfView from "@/components/MenuPdfView";

export default function HoraTePage() {
  const { t } = useLanguage();

  return (
    <MenuPdfView
      title={t.gastronomy.teaTime}
      pdfPending
    />
  );
}
