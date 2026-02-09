"use client";

import Image from "next/image";

type MenuCardProps = {
    imagen?: string;
    title: string;
    text: string;
}

function MenuCard({ imagen, title, text }: MenuCardProps) {

  return (
    <div className="bg-white overflow-hidden flex flex-col h-full">
      {/* CONTENEDOR IMAGEN */}
      <div className="relative w-full aspect-video flex-shrink-0">
        {imagen && (
          <Image
            src={imagen}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* CONTENIDO: crece para que el botón quede alineado en todas las cards */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-xl font-medium text-foreground mb-2">{title}</h3>
        {text && (
          <p className="text-foreground/80 leading-relaxed flex-1">
            {text}
          </p>
        )}
      </div>
    </div>
  )
}

export default MenuCard
