"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Café Le Gris en Google Maps (C.C. Oviedo Local 144, Medellín)
const GOOGLE_MAPS_PLACE_URL =
  "https://www.google.com/maps/place/Caf%C3%A9+Le+Gris/@6.1989969,-75.5746903,17z/data=!4m6!3m5!1s0x8e468287861a634f:0x1f5780f58bd120d9!8m2!3d6.1990379!4d-75.574826!16s%2Fg%2F1tq4s3nw?hl=es-ES&entry=ttu";
// Embed del mismo lugar para el iframe
const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.756787!2d-75.574826!3d6.1990379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e468287861a634f%3A0x1f5780f58bd120d9!2sCaf%C3%A9%20Le%20Gris!5e0!3m2!1ses!2sco!4v1707123456";

export default function LocationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="ubicacion"
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-medium text-center border-b-2 border-accent-muted pb-2 inline-block w-full">
          {t.location.title}
        </h2>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="/cafe_le_gris_web/ficha.jpg"
              alt="Cafe Le Gris exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 120vw, 60vw"
            />
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-accent"
                aria-hidden
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {t.location.address}
                </h3>
                <p className="mt-1 text-foreground/80">
                  {t.location.addressLine1}
                  <br />
                  {t.location.addressLine2}
                  <br />
                  {t.location.addressLine3}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-accent"
                aria-hidden
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {t.location.hours}
                </h3>
                <p className="mt-1 text-sm text-foreground/90 font-medium">
                  {t.location.hoursIntro}
                </p>
                <ul className="mt-3 space-y-3 text-foreground/85 text-[15px] leading-relaxed">
                  <li>
                    <span className="font-semibold text-foreground block mb-0.5">
                      {t.location.scheduleWeekdayLabel}
                    </span>
                    {t.location.scheduleWeekdayText}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground block mb-0.5">
                      {t.location.scheduleThursdayFridayLabel}
                    </span>
                    {t.location.scheduleThursdayFridayText}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground block mb-0.5">
                      {t.location.scheduleSundayLabel}
                    </span>
                    {t.location.scheduleSundayText}
                  </li>
                  <li>
                    <span className="font-semibold text-foreground block mb-0.5">
                      {t.location.scheduleBrunchLabel}
                    </span>
                    {t.location.scheduleBrunchText}
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-video bg-cream/50 rounded overflow-hidden group">
              <iframe
                title={t.location.mapTitle}
                src={GOOGLE_MAPS_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[200px] pointer-events-none"
              />
              <a
                href={GOOGLE_MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 flex items-end justify-center pb-3 sm:pb-4"
                aria-label={t.location.openInMaps}
              >
                <span className="rounded bg-foreground/90 text-white text-sm font-medium px-4 py-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {t.location.openInMaps}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
