import { useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { Pause, Play } from 'lucide-react'
import { technologies } from '../../data/skills.js'
import TechIcon from './TechIcon.jsx'

function TickerItem({ tech }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-ink-900/70 py-2 pr-4 pl-3 text-sm text-muted">
      <TechIcon name={tech.name} icon={tech.icon} className="size-4 text-brand-bright" />
      {tech.name}
    </li>
  )
}

// Seamless marquee: the list is rendered twice and shifted by half its width.
export default function TechTicker() {
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <ul className="container-page flex flex-wrap justify-center gap-2" aria-label="Technologies">
        {technologies.map((tech) => (
          <TickerItem key={tech.name} tech={tech} />
        ))}
      </ul>
    )
  }

  return (
    <div className="group relative flex items-center">
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul
          className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]"
          style={paused ? { animationPlayState: 'paused' } : undefined}
          aria-label="Technologies"
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <TickerItem key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? 'Resume technology ticker' : 'Pause technology ticker'}
        aria-pressed={paused}
        className="absolute right-3 grid size-10 place-items-center rounded-full border border-line-strong bg-ink-950/90 text-muted backdrop-blur hover:text-fg md:right-6"
      >
        {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
      </button>
    </div>
  )
}
