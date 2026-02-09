"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type MenuPdfViewProps = {
  pdfUrl?: string | null;
  title: string;
  /** Si es true, se muestra el diseño pero la carta queda como "próximamente" (sin iframe ni descarga) */
  pdfPending?: boolean;
};

export default function MenuPdfView({
  pdfUrl,
  title,
  pdfPending = false,
}: MenuPdfViewProps) {
  const { t } = useLanguage();
  const showPdf = !pdfPending && pdfUrl;

  return (
    <main className="min-h-screen bg-cream pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#gastronomia"
          className="inline-flex items-center gap-2 text-accent font-medium hover:underline mb-6"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t.menuPage.backToHome}
        </Link>
        <h1 className="font-serif text-3xl sm:text-4xl text-foreground font-medium mb-6">
          {title}
        </h1>
        {showPdf && (
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={pdfUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {t.menuPage.downloadPdf}
            </a>
          </div>
        )}
        {showPdf ? (
          <div className="bg-white shadow-lg rounded overflow-hidden aspect-[3/4] min-h-[70vh]">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              title={title}
              className="w-full h-full min-h-[70vh]"
            />
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg border border-border/50 min-h-[70vh] flex items-center justify-center p-8">
            <div className="text-center max-w-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream flex items-center justify-center text-accent">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-foreground/80 text-lg font-medium">
                {t.menuPage.pdfPending}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
