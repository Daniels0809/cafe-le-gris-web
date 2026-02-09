"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { BRUNCH_PDF } from "@/lib/menu-pdfs";
import MenuPdfView from "@/components/MenuPdfView";

export default function BrunchPage() {
  const { t } = useLanguage();

  return (
    <MenuPdfView
      pdfUrl={BRUNCH_PDF}
      title={t.gastronomy.brunch}
    />
  );
}
