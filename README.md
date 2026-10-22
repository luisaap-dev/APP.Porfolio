# luisaap.es

Portfolio profesional de Luis Ares: desarrollador web Full Stack, técnico informático y administrador de sistemas.

Web publicada en [www.luisaap.es](https://www.luisaap.es/).

## Stack

- React 18 + TypeScript (modo `strict`)
- Vite 5
- Tailwind CSS 3
- React Router 6 con rutas traducidas
- i18next (español, inglés y gallego)
- Despliegue en Vercel

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo
npm run typecheck  # comprobación de tipos
npm run lint       # ESLint
npm run build      # comprobación de tipos + build de producción en dist/
npm run preview    # sirve el build de dist/
```

## Dónde editar el contenido

- `src/data/profile.ts`: perfil, experiencia, proyectos, formación y stack. Los textos están en los tres idiomas.
- `src/types/portfolio.ts`: interfaces de esos datos.
- `src/i18n.ts`: textos de la interfaz (menú, botones, títulos de sección).
- `src/utils/routes.ts`: rutas de cada sección por idioma.
- `index.html`: título, descripción, Open Graph y datos estructurados (JSON-LD).
- `public/`: CV (`cv.pdf`), favicon, imagen para redes sociales, `robots.txt` y `sitemap.xml`.

## Despliegue

`vercel.json` define el build (`npm run build`, salida en `dist/`) y redirige todas las rutas a `index.html` para que funcionen al abrirlas directamente.
