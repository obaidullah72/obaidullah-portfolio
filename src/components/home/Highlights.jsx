import { m } from 'motion/react'
import { highlights } from '../../data/profile.js'
import { fadeUp, inView, stagger } from '../../utils/motion.js'
import Counter from '../common/Counter.jsx'

export default function Highlights() {
  return (
    <section aria-label="Experience highlights" className="container-page">
      <m.ul
        variants={stagger(0.08)}
        {...inView}
        className="grid overflow-hidden rounded-2xl border border-line bg-ink-900/60 sm:grid-cols-3"
      >
        {highlights.map((item, index) => (
          <m.li
            key={item.id}
            variants={fadeUp}
            className={`p-6 md:p-8 ${index > 0 ? 'border-t border-line sm:border-t-0 sm:border-l' : ''}`}
          >
            <p className="text-4xl font-semibold tracking-tight text-fg md:text-5xl">
              {typeof item.value === 'number' ? (
                <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
              ) : (
                `${item.value}${item.suffix}`
              )}
            </p>
            <p className="mt-3 font-medium text-fg">{item.label}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
          </m.li>
        ))}
      </m.ul>
    </section>
  )
}
