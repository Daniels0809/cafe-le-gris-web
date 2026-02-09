"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import MenuPdfView from "@/components/MenuPdfView";

export default function BrunchPage() {
  const { t } = useLanguage();

  return (
    <MenuPdfView
      title={t.gastronomy.brunch}
      pdfPending
    />
  );
}
