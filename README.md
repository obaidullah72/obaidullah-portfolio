# Obaidullah Mansoor — Portfolio

Personal portfolio of Obaidullah Mansoor, Software Engineer. A single-page site built with React, Vite and Tailwind CSS v4.

Live: https://obaidullah-portfolio-six.vercel.app/

## Tech stack

- React 19 (JSX, function components, hooks)
- Vite 8
- Tailwind CSS v4 via `@tailwindcss/vite`, with design tokens defined in `src/index.css` under `@theme`
- Motion (`motion/react`) for entrance animations, loaded through `LazyMotion`
- Lucide React for icons

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Project structure

```text
public/
  favicon.png
  resume.pdf              # served by the "Download CV" link
src/
  assets/images/          # avatar (webp)
  components/             # one component per section, plus shared pieces
    icons/                # GitHub and LinkedIn SVG marks
  data/
    site.js               # name, email, social links, nav items
    projects.js           # project showcase content
    skills.js             # skill groups
    experience.js         # work history and education
  hooks/                  # useActiveSection, useScrolled
  utils/links.js          # attributes for external links
  App.jsx                 # page composition
  index.css               # Tailwind import, @theme tokens, base styles
  App.css                 # a few component styles that read better as CSS
```

## Updating content

All text that changes over time lives in `src/data/`:

- **Add a project:** append an object to `projects.js`. Set `featured: true` to show it as a large card. `preview` picks one of the illustrated previews in `ProjectPreview.jsx` (`editor`, `chat`, `phone-voice`, `waveform`, `phone-habits`, `document`, `store`).
- **Roles and education:** edit `experience.js`.
- **Skills:** edit `skills.js`.
- **Resume:** replace `public/resume.pdf`.

## Deployment

The site is a static build. On Vercel, the default Vite preset works as-is: build command `npm run build`, output directory `dist`.
