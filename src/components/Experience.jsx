import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'
import Education from './Education.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="relative border-y border-line bg-ink-900/40 py-24 md:py-32">
      <div className="container-page">
        <SectionHeading index="04" eyebrow="Experience" title="Where I've been building." />

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-6 flex items-center gap-2.5 text-sm font-medium tracking-wide text-muted uppercase">
              <Briefcase className="size-4 text-brand-bright" aria-hidden="true" />
              Work
            </h3>
            <ol className="relative space-y-8 border-l border-line pl-8">
              {experience.map((item, index) => (
                <Reveal as="li" key={item.id} delay={index * 0.06} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[37px] size-[9px] rounded-full ring-4 ring-ink-900 ${
                      item.current ? 'bg-brand-bright' : 'bg-ink-600'
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-mono text-xs text-brand-bright">{item.period}</p>
                    {item.current && (
                      <span className="rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-brand-bright uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="mt-2 text-lg font-semibold tracking-tight text-fg">{item.role}</h4>
                  <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Education />
        </div>
      </div>
    </section>
  )
}
