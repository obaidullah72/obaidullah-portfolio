import { m } from 'motion/react'
import { ease } from '../../utils/motion.js'

// Intro block shared by every inner page.
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header className="relative isolate overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="glow -top-48 left-1/4 -z-10 h-[420px] w-[620px] opacity-60" aria-hidden="true" />
      <div className="container-page">
        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-brand-bright uppercase"
        >
          <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
          {eyebrow}
        </m.p>
        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease }}
          className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-fg sm:text-5xl lg:text-6xl"
        >
          {title}
        </m.h1>
        {description && (
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
          >
            {description}
          </m.p>
        )}
        {children && (
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
            className="mt-8"
          >
            {children}
          </m.div>
        )}
      </div>
    </header>
  )
}
