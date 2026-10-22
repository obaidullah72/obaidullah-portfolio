import { Link } from 'react-router-dom'
import { LEVELS } from '../../data/skills.js'
import { getProjectsBySlugs } from '../../utils/projectHelpers.js'
import Reveal from '../common/Reveal.jsx'

function LevelMeter({ level }) {
  const filled = LEVELS.indexOf(level) + 1
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex gap-1" aria-hidden="true">
        {LEVELS.map((name, i) => (
          <span key={name} className={`h-1.5 w-3 rounded-full ${i < filled ? 'bg-brand-bright' : 'bg-ink-600'}`} />
        ))}
      </span>
      <span className="w-32 text-right text-xs text-muted sm:w-36">{level}</span>
    </span>
  )
}

export default function SkillCategory({ category, delay = 0, compact = false }) {
  const Icon = category.icon
  const relatedProjects = compact ? [] : getProjectsBySlugs(category.projects)

  return (
    <Reveal as="article" delay={delay} className="card-surface flex flex-col p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand-bright">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{category.title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted">{category.blurb}</p>

      {compact ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li key={skill.name} className="rounded-md border border-line bg-ink-950/50 px-2.5 py-1 font-mono text-xs text-[#cbd5e1]">
              {skill.name}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-5 divide-y divide-line">
          {category.skills.map((skill) => (
            <li key={skill.name} className="flex items-center justify-between gap-3 py-2.5 text-sm">
              <span className="text-[#e2e8f0]">{skill.name}</span>
              <LevelMeter level={skill.level} />
            </li>
          ))}
        </ul>
      )}

      {relatedProjects.length > 0 && (
        <p className="mt-auto pt-5 text-xs leading-relaxed text-subtle">
          Used in{' '}
          {relatedProjects.map((project, i) => (
            <span key={project.slug}>
              {i > 0 && ', '}
              <Link to={`/projects/${project.slug}`} className="text-brand-bright hover:text-fg">
                {project.title}
              </Link>
            </span>
          ))}
        </p>
      )}
    </Reveal>
  )
}
