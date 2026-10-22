import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, eyebrow, title, description, align = 'left', action, className = '' }) {
  const centered = align === 'center'
  return (
    <Reveal
      className={`mb-10 flex flex-col gap-6 md:mb-14 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'} ${className}`}
    >
      <div className="max-w-2xl">
        <p
          className={`mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-brand-bright uppercase ${centered ? 'justify-center' : ''}`}
        >
          {index && <span className="text-subtle">{index}</span>}
          <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-fg md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  )
}
