import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-12 max-w-2xl md:mb-16 ${centered ? 'mx-auto text-center' : ''}`}>
      <p
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-bright ${centered ? 'justify-center' : ''}`}
      >
        <span className="text-subtle">{index}</span>
        <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-fg md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>}
    </Reveal>
  )
}
