import { GraduationCap } from 'lucide-react'
import { education } from '../data/experience.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-2.5 text-sm font-medium tracking-wide text-muted uppercase">
        <GraduationCap className="size-4 text-brand-bright" aria-hidden="true" />
        Education
      </h3>
      <ol className="space-y-4">
        {education.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.06} className="card-surface p-6">
            <p className="font-mono text-xs text-brand-bright">{item.period}</p>
            <h4 className="mt-2 text-lg font-semibold tracking-tight text-fg">{item.degree}</h4>
            <p className="text-sm text-muted">{item.school}</p>
            {item.highlights.length > 0 && (
              <ul className="mt-4 grid gap-2 border-t border-line pt-4 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2 text-sm text-[#cbd5e1]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-bright" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
