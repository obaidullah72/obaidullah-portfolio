import { AnimatePresence, m } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled.js'

export default function ScrollToTop() {
  const visible = useScrolled(700)

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href="#home"
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-line-strong bg-ink-800/90 text-fg shadow-xl shadow-black/40 backdrop-blur transition-colors hover:border-brand/50 hover:text-brand-bright"
        >
          <ArrowUp className="size-4" />
        </m.a>
      )}
    </AnimatePresence>
  )
}
