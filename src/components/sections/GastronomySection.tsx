"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import MenuCard from "@/components/cards/MenuCard";
import Button from "@/components/Button";

const CARDS = [
  {
    id: "menuPrincipal",
    image: "/cafe_le_gris_web/platos.jpg",
    titleKey: "mainMenu" as const,
    descKey: "mainMenuDesc" as const,
  },
  {
    id: "horaTe",
    image: "/cafe_le_gris_web/flan.jpg",
    titleKey: "teaTime" as const,
    descKey: "teaTimeDesc" as const,
  },
  {
    id: "brunch",
    image: "/cafe_le_gris_web/huevos_champiñones.jpg",
    titleKey: "brunch" as const,
    descKey: "brunchDesc" as const,
  },
] as const;

export default function GastronomySection() {
  const { t } = useLanguage();

  return (
    <section
      id="gastronomia"
      className="bg-white py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground font-medium">
            {t.gastronomy.title}
          </h2>
          <div className="mt-2 h-0.5 w-16 mx-auto bg-accent-muted" />
          <p className="mt-6 text-foreground/80 max-w-xl mx-auto">
            {t.gastronomy.subtitle}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ id, image, titleKey, descKey }) => (
            <div
              key={id}
              className="group flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <MenuCard
                imagen={image}
                title={t.gastronomy[titleKey]}
                text={t.gastronomy[descKey]}
              />
              <div className="p-4 pt-0">
                <Button page={id} label={t.gastronomy.viewMenu} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
