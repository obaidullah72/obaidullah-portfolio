import Reveal from './Reveal.jsx'

export default function SkillCard({ group, delay, className = '' }) {
  const Icon = group.icon
  return (
    <Reveal as="article" delay={delay} className={`card-surface group flex flex-col p-6 md:p-7 ${className}`}>
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg border border-brand/25 bg-brand/10 text-brand-bright transition-colors group-hover:bg-brand/20">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{group.title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted">{group.blurb}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-line bg-ink-950/50 px-2.5 py-1 font-mono text-xs text-[#cbd5e1]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
