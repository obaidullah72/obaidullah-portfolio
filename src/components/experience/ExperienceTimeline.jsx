import { Link } from 'react-router-dom'
import { getProjectsBySlugs } from '../../utils/projectHelpers.js'
import { TechBadgeList } from '../common/TechBadge.jsx'
import Reveal from '../common/Reveal.jsx'

// Vertical timeline; each entry may list tags and link to related projects.
export default function ExperienceTimeline({ entries }) {
  return (
    <ol className="relative space-y-10 border-l border-line pl-8 md:pl-10">
      {entries.map((entry, index) => {
        const related = entry.projects ? getProjectsBySlugs(entry.projects) : []
        return (
          <Reveal as="li" key={entry.id} delay={index * 0.05} className="relative">
            <span
              className={`absolute top-1.5 -left-[37px] size-[9px] rounded-full ring-4 ring-ink-950 md:-left-[45px] ${
                entry.current ? 'bg-cyan' : 'bg-brand-bright'
              }`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-xs text-brand-bright">{entry.period}</p>
              {entry.current && (
                <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-cyan uppercase">
                  Current
                </span>
              )}
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-fg md:text-xl">{entry.title}</h3>
            {entry.subtitle && <p className="text-sm text-muted">{entry.subtitle}</p>}
            {entry.description && <p className="mt-2 max-w-2xl leading-relaxed text-muted">{entry.description}</p>}
            {entry.tags?.length > 0 && (
              <div className="mt-4">
                <TechBadgeList items={entry.tags} label="Technologies" />
              </div>
            )}
            {related.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Related projects">
                {related.map((project) => (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex min-h-9 items-center rounded-lg border border-line-strong bg-ink-900/60 px-3 text-sm text-fg transition-colors hover:border-brand/50"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        )
      })}
    </ol>
  )
}
