import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { technologies } from '../../data/skills.js'
import TechIcon from '../common/TechIcon.jsx'

// Horizontal, scroll-snapping track. Touch devices swipe natively; mice can drag
// or use the buttons; keyboard users tab through the cards or use the buttons.
export default function SkillsCarousel() {
  const track = useRef(null)
  const drag = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: false })

  const updateEdges = useCallback(() => {
    const el = track.current
    if (!el) return
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 })
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener('resize', updateEdges)
    return () => window.removeEventListener('resize', updateEdges)
  }, [updateEdges])

  const scrollByPage = (direction) => {
    const el = track.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' })
  }

  const onPointerDown = (event) => {
    if (event.pointerType !== 'mouse') return
    drag.current = { x: event.clientX, left: track.current.scrollLeft }
  }
  const onPointerMove = (event) => {
    if (!drag.current) return
    const dx = event.clientX - drag.current.x
    track.current.scrollLeft = drag.current.left - dx
  }
  const endDrag = () => {
    drag.current = null
  }

  return (
    <section aria-roledescription="carousel" aria-label="Technologies" className="relative">
      <div className="mb-5 flex items-center justify-end gap-2">
        <CarouselButton onClick={() => scrollByPage(-1)} disabled={edges.start} label="Scroll technologies left">
          <ChevronLeft className="size-5" />
        </CarouselButton>
        <CarouselButton onClick={() => scrollByPage(1)} disabled={edges.end} label="Scroll technologies right">
          <ChevronRight className="size-5" />
        </CarouselButton>
      </div>

      <ul
        ref={track}
        onScroll={updateEdges}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className={`-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:thin] md:-mx-8 md:scroll-px-8 md:px-8 cursor-grab active:cursor-grabbing`}
      >
        {technologies.map((tech) => (
          <li key={tech.name} className="w-[15rem] shrink-0 snap-start sm:w-[16.5rem]">
            <article className="card-surface group h-full p-6 select-none hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand-bright transition-colors group-hover:bg-brand/20 group-hover:text-cyan">
                <TechIcon name={tech.name} icon={tech.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{tech.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{tech.note}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

function CarouselButton({ onClick, disabled, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line-strong bg-ink-900/70 text-fg transition-colors hover:border-brand/50 hover:text-brand-bright disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line-strong disabled:hover:text-fg"
    >
      {children}
    </button>
  )
}
