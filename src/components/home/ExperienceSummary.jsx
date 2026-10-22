import { ArrowRight, Code2, LineChart } from 'lucide-react'
import { experienceOverview } from '../../data/experience.js'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const icons = { software: Code2, data: LineChart }

export default function ExperienceSummary() {
  return (
    <section className="container-page">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Two tracks that meet in the same products."
        action={
          <Button to="/experience" variant="secondary" size="sm">
            Full experience <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        }
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {experienceOverview.map((track, index) => {
          const Icon = icons[track.id]
          return (
            <Reveal key={track.id} delay={index * 0.08} className="card-surface relative overflow-hidden p-7 md:p-9">
              <div className="glow -top-24 -right-24 size-64 opacity-40" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-bright">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  {track.level && (
                    <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs text-cyan">
                      Level: {track.level}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-4xl font-semibold tracking-tight text-fg">{track.span}</p>
                <h3 className="mt-1 text-lg font-medium text-fg">{track.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{track.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
