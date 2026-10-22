import { m } from 'motion/react'
import { ArrowRight, Download } from 'lucide-react'
import { profile, socials } from '../../data/profile.js'
import { socialIcons } from '../common/icons/socialIcons.js'
import { external } from '../../utils/links.js'
import { ease } from '../../utils/motion.js'
import Button from '../common/Button.jsx'
import HeroScene from './HeroScene.jsx'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
})

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 lg:flex lg:min-h-[min(100svh,920px)] lg:items-center lg:pb-20">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="glow -top-52 left-1/3 -z-10 h-[520px] w-[760px] opacity-60" aria-hidden="true" />

      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
        <div>
          <m.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-900/70 py-1.5 pr-3.5 pl-2 text-xs text-muted"
          >
            <span className="relative grid size-2 place-items-center" aria-hidden="true">
              <span className="absolute size-2 animate-ping rounded-full bg-cyan/60" />
              <span className="size-1.5 rounded-full bg-cyan" />
            </span>
            {profile.name} · {profile.title}
          </m.p>

          <m.h1
            {...fadeUp(0.08)}
            className="text-4xl leading-[1.06] font-semibold tracking-tight text-balance text-fg sm:text-5xl xl:text-[3.75rem]"
          >
            Engineering digital experiences with <span className="text-gradient">code, data &amp; AI.</span>
          </m.h1>

          <m.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            I build full-stack web apps, Flutter mobile apps and backend services, and I bring{' '}
            <span className="text-brand-bright">retrieval, LLMs and data analysis</span> into them where they make the
            product more useful. Around three years of software development, and a longer run in data science.
          </m.p>

          <m.div {...fadeUp(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/projects">
              Explore My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button to="/contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </m.div>

          <m.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            {socials.map((social) => {
              const Icon = socialIcons[social.id]
              return (
                <a
                  key={social.id}
                  href={social.href}
                  {...external}
                  className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-fg"
                >
                  <Icon className="size-4" />
                  {social.label}
                </a>
              )
            })}
            <span className="h-4 w-px bg-line-strong" aria-hidden="true" />
            <a
              href={profile.resume}
              download="Obaidullah_Mansoor_CV.pdf"
              className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-fg"
            >
              <Download className="size-4" aria-hidden="true" />
              Download CV
            </a>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
        >
          <HeroScene />
        </m.div>
      </div>
    </section>
  )
}
