import { Fragment } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import Reveal from '../common/Reveal.jsx'

// Layered diagram built from the project's architecture data.
export default function ProjectArchitecture({ architecture }) {
  const { layers, notes, endpoints } = architecture

  return (
    <div className="space-y-8">
      <Reveal>
        <div
          className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center"
          role="img"
          aria-label={`Architecture: ${layers.map((layer) => `${layer.name} (${layer.items.join(', ')})`).join(', then ')}`}
        >
          {layers.map((layer, index) => (
            <Fragment key={layer.name}>
              {index > 0 && (
                <span className="grid place-items-center text-brand-bright/70" aria-hidden="true">
                  <ArrowDown className="size-4 lg:hidden" />
                  <ArrowRight className="hidden size-4 lg:block" />
                </span>
              )}
              <div className="flex-1 rounded-xl border border-line-strong bg-ink-900/80 p-4" aria-hidden="true">
                <p className="font-mono text-[11px] tracking-[0.15em] text-brand-bright uppercase">{layer.name}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[#cbd5e1]">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Fragment>
          ))}
        </div>
      </Reveal>

      {(notes.length > 0 || endpoints.length > 0) && (
        <div className="grid gap-6 lg:grid-cols-2">
          {notes.length > 0 && (
            <Reveal>
              <h3 className="mb-3 text-sm font-medium text-fg">Implementation notes</h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {notes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-bright" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
          {endpoints.length > 0 && (
            <Reveal>
              <h3 className="mb-3 text-sm font-medium text-fg">Routes and endpoints</h3>
              <ul className="space-y-1.5 rounded-xl border border-line bg-ink-950/60 p-4 font-mono text-xs text-[#bfdbfe]">
                {endpoints.map((endpoint) => (
                  <li key={endpoint} className="break-words">
                    {endpoint}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      )}
    </div>
  )
}
