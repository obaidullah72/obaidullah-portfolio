import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { ease } from '../../utils/motion.js'

const SWIPE_THRESHOLD = 50

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction * 48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction * -48 }),
}

/**
 * Single-slide carousel used for the featured projects and the screenshot gallery.
 * Supports buttons, dots, arrow keys, touch/mouse swipe and optional autoplay that
 * pauses on hover, on focus, when the tab is hidden and under reduced motion.
 */
export default function Slider({
  items,
  renderSlide,
  getKey = (item, index) => item.id ?? index,
  label,
  getSlideLabel = (item, index) => `${index + 1} of ${items.length}`,
  autoplay = 0,
  className = '',
  viewportClassName = '',
}) {
  const [[index, direction], setState] = useState([0, 0])
  const [playing, setPlaying] = useState(Boolean(autoplay))
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const reducedMotion = useReducedMotion()
  const pointerStart = useRef(null)
  const dragged = useRef(false)
  const count = items.length

  const goTo = useCallback(
    (next, dir) => setState(([current]) => [((next % count) + count) % count, dir ?? (next > current ? 1 : -1)]),
    [count],
  )
  const next = useCallback(() => setState(([current]) => [(current + 1) % count, 1]), [count])
  const previous = useCallback(() => setState(([current]) => [(current - 1 + count) % count, -1]), [count])

  const autoplayActive = Boolean(autoplay) && playing && !hovered && !focused && !reducedMotion && count > 1

  useEffect(() => {
    if (!autoplayActive) return
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') next()
    }, autoplay)
    return () => clearInterval(timer)
  }, [autoplayActive, autoplay, next, index])

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      next()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      previous()
    }
  }

  const onPointerDown = (event) => {
    pointerStart.current = { x: event.clientX, y: event.clientY }
    dragged.current = false
  }
  const onPointerUp = (event) => {
    if (!pointerStart.current) return
    const dx = event.clientX - pointerStart.current.x
    const dy = event.clientY - pointerStart.current.y
    pointerStart.current = null
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      dragged.current = true
      if (dx < 0) next()
      else previous()
    }
  }
  // Swallow the click that follows a swipe so links inside slides don't fire.
  const onClickCapture = (event) => {
    if (dragged.current) {
      event.preventDefault()
      event.stopPropagation()
      dragged.current = false
    }
  }

  const item = items[index]

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setFocused(false)}
    >
      <div
        className={`relative grid touch-pan-y overflow-hidden select-none ${viewportClassName}`}
        aria-live={autoplayActive ? 'off' : 'polite'}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointerStart.current = null)}
        onClickCapture={onClickCapture}
      >
        <AnimatePresence initial={false} custom={direction}>
          <m.div
            key={getKey(item, index)}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease }}
            className="[grid-area:1/1]"
            role="group"
            aria-roledescription="slide"
            aria-label={getSlideLabel(item, index)}
          >
            {renderSlide(item, index)}
          </m.div>
        </AnimatePresence>
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5" role="group" aria-label="Choose slide">
            {items.map((slide, i) => (
              <button
                key={getKey(slide, i)}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${getSlideLabel(slide, i)}`}
                aria-current={i === index ? 'true' : undefined}
                className="group grid h-8 place-items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-brand-bright' : 'w-1.5 bg-ink-600 group-hover:bg-muted'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {Boolean(autoplay) && !reducedMotion && (
              <SliderButton
                onClick={() => setPlaying((value) => !value)}
                label={playing ? 'Pause autoplay' : 'Start autoplay'}
              >
                {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
              </SliderButton>
            )}
            <SliderButton onClick={previous} label="Previous slide">
              <ChevronLeft className="size-5" />
            </SliderButton>
            <SliderButton onClick={next} label="Next slide">
              <ChevronRight className="size-5" />
            </SliderButton>
          </div>
        </div>
      )}
    </section>
  )
}

function SliderButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-line-strong bg-ink-900/70 text-fg transition-colors hover:border-brand/50 hover:text-brand-bright"
    >
      {children}
    </button>
  )
}
