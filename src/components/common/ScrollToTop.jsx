import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../../hooks/useScrolled.js'

// Resets scroll on new navigations (but not on back/forward, which restore position),
// and scrolls to a hash target when one is present.
export function RouteScrollManager() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView())
      return
    }
    if (navigationType !== 'POP') window.scrollTo(0, 0)
  }, [pathname, hash, navigationType])

  return null
}

export default function ScrollToTop() {
  const visible = useScrolled(700)

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            })
          }
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-line-strong bg-ink-850/90 text-fg shadow-xl shadow-black/40 backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-bright"
        >
          <ArrowUp className="size-4" />
        </m.button>
      )}
    </AnimatePresence>
  )
}
