import { ArrowRight } from 'lucide-react'
import { profile, socials } from '../../data/profile.js'
import { socialIcons } from '../common/icons/socialIcons.js'
import Button from '../common/Button.jsx'
import Reveal from '../common/Reveal.jsx'

export default function ContactCTA() {
  return (
    <section className="container-page">
      <Reveal className="card-surface relative isolate overflow-hidden px-6 py-14 text-center sm:px-12 md:py-20">
        <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
        <div
          className="glow bottom-0 left-1/2 -z-10 h-80 w-[640px] -translate-x-1/2 translate-y-1/2 opacity-70"
          aria-hidden="true"
        />
        <p className="font-mono text-xs tracking-[0.2em] text-brand-bright uppercase">Let’s work together</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-fg md:text-5xl">
          Have a product, role or idea in mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted md:text-lg">
          I’m open to full-stack, backend, mobile and AI engineering work. Tell me what you’re building.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/contact">
            Get in touch{' '}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Button>
          <Button href={`mailto:${profile.email}`} variant="secondary">
            {profile.email}
          </Button>
        </div>
        <ul className="mt-8 flex justify-center gap-3">
          {socials.map((social) => {
            const Icon = socialIcons[social.id]
            return (
              <li key={social.id}>
                <Button
                  href={social.href}
                  variant="ghost"
                  size="sm"
                  aria-label={`${social.label} (opens in a new tab)`}
                >
                  <Icon className="size-4" /> {social.label}
                </Button>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </section>
  )
}
