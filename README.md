# Obaidullah Mansoor — Portfolio

Multipage portfolio of Obaidullah Mansoor, Software Engineer. It covers ten real projects from [github.com/obaidullah72](https://github.com/obaidullah72), each with its own detail page, plus an interactive 3D hero, sliders and filterable project listings.

Live: https://obaidullah-portfolio-six.vercel.app/

## Tech stack

| Area | Choice |
| --- | --- |
| UI | React 19, JavaScript (JSX) |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite`; design tokens in `src/index.css` under `@theme` |
| Routing | React Router 7 (`createBrowserRouter`), lazy-loaded pages |
| UI animation | Motion (`motion/react`) with `LazyMotion` and `MotionConfig reducedMotion="user"` |
| 3D | three.js, React Three Fiber, Drei (`Float`, `AdaptiveDpr`) |
| Icons | Lucide React for UI icons, Simple Icons for technology logos |

**Animation strategy.** Each kind of motion has one owner:

- **Motion:** page transitions, scroll reveals, sliders, counters and the mobile menu.
- **React Three Fiber:** the hero scene only.
- **Plain CSS:** card tilt, the ticker marquee and the About page's layer stack.

GSAP isn't used. Nothing on the site needs scrubbed, timeline-driven scroll animation, so it would only add a third animation system.

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run lint      # ESLint
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home: 3D hero, highlights, featured projects slider, technology ticker, previews of every section |
| `/about` | Background, engineering philosophy, interests, education, selected projects |
| `/projects` | All projects with category filter, technology filter and search; filters are stored in the URL |
| `/projects/:slug` | Project detail page, generated from `src/data/projects.js` |
| `/skills` | Technology carousel and six skill categories with descriptive levels |
| `/experience` | Software and data science overview, roles, project timeline, education |
| `/contact` | Contact channels and form |
| `*` | 404 page |

## Folder structure

```text
public/
  images/projects/<slug>/   real screenshots and charts (WebP)
  favicon.png (avatar, also used on the loading screen), og-image.png, resume.pdf
  _redirects                SPA fallback for Netlify
src/
  assets/images/            avatar
  components/
    about/                  CSS 3D layer-stack illustration
    common/                 Button, Slider, Reveal, SectionHeading, PageHeader, TechTicker,
                            Counter, TechIcon, TechBadge, PageTransition, LoadingScreen,
                            ScrollToTop, icons/
    contact/                ContactForm
    experience/             ExperienceTimeline
    hero/                   Hero, HeroScene (lazy 3D + fallback), FloatingTechLabels
    home/                   home page sections
    layout/                 MainLayout, Navbar, MobileMenu, Footer, Monogram
    projects/               ProjectCard, ProjectGrid, ProjectFilters, FeaturedProjectsSlider,
                            ProjectGallery, ProjectArchitecture, ProjectMedia, ProjectPreview
    skills/                 SkillsCarousel, SkillCategory
    three/                  SceneCanvas, HeroObject, SceneFallback, SceneErrorBoundary
  data/                     profile, navigation, projects, skills, experience, education
  hooks/                    useMediaQuery, useScrolled, useWebGLSupport
  pages/                    one component per route
  utils/                    metadata (per-page SEO), projectHelpers, motion, techIcons, links
vercel.json                 SPA fallback for Vercel
```

## Content and data

All content lives in `src/data/`. Cards, filters, the slider and detail pages all read the same records.

- **Projects** (`projects.js`): each record follows one schema: `slug`, `title`, `categories`, `summary`, `description`, `overview`, `technologies` (name, role, usage), `features`, `planned`, `architecture`, `challenges`, `screenshots`, `repositories`, `liveUrl`, `primaryLanguage`, `lastUpdated`, `featured` and `preview`.
  - Set `featured: true` to include a project in the home slider.
  - Projects without screenshots use the CSS illustration named in `preview`.
  - Anything a README mentions but the code doesn't implement goes in `planned`, not `features`.
- **Skills** (`skills.js`): use the descriptive levels in `LEVELS`, not percentages.
- **Experience and education:** `experience.js` and `education.js`.
- **Resume:** replace `public/resume.pdf`.

How the project content was verified:

- Each repository was cloned and its code checked; READMEs weren't taken on trust.
- Screenshots of Vox, the PDF RAG Chatbot, the AI Interview Platform and the LLM Streaming Demo were captured from each project's own frontend running locally, without a backend.
- The Sales & Profitability Analysis charts and the house price plot are output files committed to those repositories.

## 3D notes

- The hero scene is procedural: an icosahedron core, a wireframe shell, three orbits and a particle field. There are no model or HDR downloads.
- three.js, R3F and Drei are split into their own chunk (about 240 KB gzipped), loaded lazily after the page renders.
- An SVG version of the scene shows immediately. It crossfades to the canvas once the first frame has rendered, so the hero never shows an empty box or shifts the layout.
- The scene falls back to the SVG when WebGL is unavailable or the renderer throws.
- Pointer tracking only runs on fine-pointer devices.
- Rendering pauses while the hero is off-screen.
- Under `prefers-reduced-motion` the scene renders a single static frame. Autoplay, the ticker and the counters are also disabled.

## Contact form

The form validates input, with accessible error messages and focus moved to the first invalid field. It submits in one of two ways:

- **With `VITE_CONTACT_ENDPOINT` set** (any Formspree-compatible endpoint that accepts JSON), it POSTs there. Success is shown only after a 2xx response.
- **Without it**, the button reads "Open in email app" and opens a pre-filled email to the address in `src/data/profile.js`. Nothing is sent or stored by the site.

To enable direct delivery, create a form on [Formspree](https://formspree.io) (or a compatible service) and set the variable:

```bash
# .env.local, or the hosting provider's environment settings
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

## Deployment

This is a static single-page app, so every route has to fall back to `index.html` for direct links like `/projects/vox` to work.

- **Vercel** (current host): `vercel.json` rewrites all paths to `/index.html`; static files are served first. Use build command `npm run build` and output directory `dist`.
- **Netlify:** `public/_redirects` (`/* /index.html 200`) is copied into `dist`.
- **Other hosts:** configure an equivalent rewrite to `index.html`.

The canonical URL and Open Graph tags use `SITE_URL` in `src/data/profile.js` and the tags in `index.html`. Update both if the domain changes.
