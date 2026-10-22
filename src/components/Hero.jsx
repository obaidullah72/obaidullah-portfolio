import { m } from 'motion/react'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile, socials } from '../data/site.js'
import { socialIcons } from './icons/socialIcons.js'
import { external } from '../utils/links.js'
import HeroVisual from './HeroVisual.jsx'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 lg:flex lg:min-h-[min(100svh,900px)] lg:items-center lg:pb-24"
    >
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="glow -top-40 left-1/2 -z-10 h-[480px] w-[720px] -translate-x-1/2 opacity-70" aria-hidden="true" />

      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
        <div>
          <m.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-900/70 py-1.5 pr-3.5 pl-2.5 text-xs text-muted"
          >
            <MapPin className="size-3.5 text-brand-bright" aria-hidden="true" />
            {profile.title} · {profile.location}
          </m.p>

          <m.h1
            {...fadeUp(0.08)}
            className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-fg sm:text-5xl lg:text-[3.5rem]"
          >
            Hi, I&apos;m Obaidullah. I build <span className="text-gradient">web, mobile and AI</span> products that
            people actually use.
          </m.h1>

          <m.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
            I&apos;m a software engineer working across <span className="text-fg">React</span>,{' '}
            <span className="text-fg">Python</span>, <span className="text-fg">Node.js</span> and{' '}
            <span className="text-fg">Flutter</span>. I like taking an idea from API design to a finished interface, and
            adding <span className="text-brand-bright">retrieval and LLM features</span> where they solve a real
            problem.
          </m.p>

          <m.div {...fadeUp(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white shadow-[0_8px_30px_-10px_rgb(59_130_246/0.7)] transition-colors hover:bg-brand-bright"
            >
              Explore My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-ink-900/60 px-5 py-3 font-medium text-fg transition-colors hover:border-brand/50 hover:bg-ink-800"
            >
              Let&apos;s Connect
            </a>
          </m.div>

          <m.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </m.div>
      </div>
    </section>
  )
}
