const BASE = "/cafe_le_gris_web";

function pdfPath(filename: string): string {
  return `${BASE}/${encodeURIComponent(filename)}`;
}

/** Carta menú principal: español e inglés */
export const MENU_PRINCIPAL_PDFS = {
  es: pdfPath("carta legris español enero 2026-2.pdf"),
  en: pdfPath("carta legris ingles enero 2026.pdf"),
} as const;

/** Solo existe carta en español e inglés: el resto de idiomas ven la versión en inglés */
export function getMenuPrincipalPdfUrl(locale: string): string {
  return locale === "es" ? MENU_PRINCIPAL_PDFS.es : MENU_PRINCIPAL_PDFS.en;
}

/** Carta brunch / desayunos (un solo PDF) */
export const BRUNCH_PDF = pdfPath(
  "cafe legris desayunos afiche_260123_210715.pdf"
);
