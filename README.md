<div align="center">

# ☕ Café Le Gris

### Sitio web corporativo · Restaurante & Café de especialidad

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

**[Ver demo](https://cafe-le-gris.vercel.app)** · **Medellín, Colombia**

</div>

---

## 🎯 Sobre el proyecto

**Café Le Gris** es un sitio web corporativo de alta gama desarrollado para un restaurante y café de especialidad con más de cuatro décadas de trayectoria. El proyecto combina **diseño elegante**, **experiencia de usuario cuidada** y **multilingualismo real** para reflejar la identidad de una marca premium.

Fue concebido como una **single-page application** con navegación por secciones, integración con Google Maps, flujo de reservas vía WhatsApp y visualización de cartas en PDF, pensado tanto para usuarios finales como para destacar en portafolio y procesos de reclutamiento.

---

## ✨ Funcionalidades

| Área | Detalle |
|------|--------|
| **Idiomas** | Español, inglés, francés y portugués con selector persistente (localStorage) |
| **Navegación** | Scroll suave por secciones; enlaces que funcionan correctamente al repetir clic (sin “bug” de hash) |
| **Ubicación** | Mapa embebido de Google Maps (Café Le Gris, C.C. Oviedo) con enlace directo al perfil |
| **Reservas** | Botón WhatsApp con mensaje predeterminado (fecha, hora, número de personas) según idioma |
| **Horarios** | Textos claros y accesibles por día (entre semana, sábado, domingo) con brunch y hora del té |
| **Gastronomía** | Tarjetas por tipo de menú (Principal, Brunch, Hora del té) con enlaces a vistas PDF |
| **Diseño** | Responsive, tipografía serif, paleta sobria y componentes reutilizables |

---

## 🛠 Tecnologías

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, TypeScript 5
- **Estilos:** Tailwind CSS 4
- **Internacionalización:** Context API + objeto de traducciones (sin librerías externas)
- **Despliegue:** Preparado para Vercel u otro hosting estático/Node

---

## 📁 Estructura del proyecto

```
src/
├── app/                    # Rutas (home, menuPrincipal, brunch, horaTe)
├── components/             # Header, Footer, Hero, secciones, cards, botones
├── contexts/               # LanguageContext (locale + traducciones)
├── i18n/                   # translations.ts (es, en, fr, pt)
├── lib/                    # Utilidades (PDFs de cartas)
└── types/                  # Tipos TypeScript
```

---

## 🚀 Cómo ejecutarlo

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/cafe-le-gris.git
cd cafe-le-gris

# Instalar dependencias
npm install

# Modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

```bash
# Build de producción
npm run build

# Servir build
npm start
```

---

## 📄 Licencia

Proyecto de uso educativo y portafolio.  
© Café Le Gris — marca del restaurante.

---

<div align="center">

**Hecho con atención al detalle para un café que se toma en serio.**

</div>
