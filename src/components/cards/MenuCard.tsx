"use client";

import Image from "next/image";

type MenuCardProps = {
    imagen?: string;
    title: string;
    text: string;
}

function MenuCard({ imagen, title, text }: MenuCardProps) {

  return (
 <div className="bg-white overflow-hidden">
      
      {/* CONTENEDOR IMAGEN */}
      <div className="relative w-full aspect-video">
        {imagen && (
          <Image
            src={imagen}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* CONTENIDO */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium text-foreground mb-2">{title}</h3>
        {text && (
          <p className="text-foreground/80 leading-relaxed">
            {text}
          </p>
        )}
      </div>

    </div>
  )
}

export default MenuCard
