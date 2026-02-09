"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getMenuPrincipalPdfUrl } from "@/lib/menu-pdfs";
import MenuPdfView from "@/components/MenuPdfView";

export default function MenuPrincipalPage() {
  const { locale, t } = useLanguage();
  const pdfUrl = getMenuPrincipalPdfUrl(locale);

  return (
    <MenuPdfView
      pdfUrl={pdfUrl}
      title={t.gastronomy.mainMenu}
    />
  );
}
