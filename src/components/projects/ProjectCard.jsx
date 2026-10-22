import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'motion/react'
import { ArrowUpRight, Star } from 'lucide-react'
import { useFinePointer } from '../../hooks/useMediaQuery.js'
import { external } from '../../utils/links.js'
import { GithubIcon } from '../common/icons/BrandIcons.jsx'
import { TechBadgeList } from '../common/TechBadge.jsx'
import ProjectMedia from './ProjectMedia.jsx'

const MAX_TILT = 6

export default function ProjectCard({ project, headingLevel: Heading = 'h3' }) {
  const card = useRef(null)
  const finePointer = useFinePointer()
  const reducedMotion = useReducedMotion()
  const tilt = finePointer && !reducedMotion

  // Pointer position drives CSS variables for the tilt and the spotlight highlight.
  const onPointerMove = (event) => {
    const el = card.current
    if (!tilt || !el) return
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    el.style.setProperty('--ry', `${(x - 0.5) * MAX_TILT * 2}deg`)
    el.style.setProperty('--rx', `${(0.5 - y) * MAX_TILT * 2}deg`)
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.setProperty('--px', (x - 0.5).toFixed(3))
    el.style.setProperty('--py', (y - 0.5).toFixed(3))
  }
  const onPointerLeave = () => {
    const el = card.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--px', '0')
    el.style.setProperty('--py', '0')
  }

  const repo = project.repositories[0]

  return (
    <div className="h-full [perspective:1200px]">
      <article
        ref={card}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="tilt-card card-surface group relative flex h-full flex-col overflow-hidden"
      >
        <div className="tilt-layer relative">
          <ProjectMedia project={project} className="aspect-[16/10] border-b border-line" />
          {project.featured && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full border border-brand/40 bg-ink-950/80 px-2.5 py-1 text-[11px] font-medium text-brand-bright backdrop-blur">
              <Star className="size-3" aria-hidden="true" /> Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs text-brand-bright">{project.category}</p>
          <Heading className="mt-2 text-xl font-semibold tracking-tight text-fg">
            <Link
              to={`/projects/${project.slug}`}
              className="after:absolute after:inset-0 after:z-[1] after:content-[''] focus-visible:outline-none focus-visible:after:rounded-[var(--radius-card)] focus-visible:after:outline-2 focus-visible:after:outline-brand-bright"
            >
              {project.title}
            </Link>
          </Heading>
          <p className="mt-3 text-sm leading-relaxed text-pretty text-muted">{project.summary}</p>

          <div className="mt-auto pt-6">
            <TechBadgeList items={project.technologies.map((tech) => tech.name)} limit={5} />
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg">
                View details
                <ArrowUpRight
                  className="size-4 text-brand-bright transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
              <a
                href={repo.url}
                {...external}
                className="relative z-[2] inline-flex min-h-10 items-center gap-2 rounded-lg px-2 text-sm text-muted hover:text-fg"
                aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
              >
                <GithubIcon className="size-4" />
                Code
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
