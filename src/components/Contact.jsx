import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { profile, socials } from '../data/site.js'
import { socialIcons } from './icons/socialIcons.js'
import { external } from '../utils/links.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  if (!navigator.clipboard) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      // Clipboard access can be denied; the mailto link remains available.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-line-strong bg-ink-950/40 px-5 py-3 font-medium text-fg transition-colors hover:border-brand/50"
    >
      {copied ? (
        <Check className="size-4 text-brand-bright" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
    </button>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="glow bottom-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 translate-y-1/3 opacity-60"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          align="center"
          title="Have a project or role in mind? Let's talk."
          description="I'm open to full-stack, mobile and AI engineering work, whether that's a full-time role, a freelance build or a collaboration. Email is the fastest way to reach me."
        />

        <Reveal className="card-surface mx-auto max-w-3xl overflow-hidden">
          <div className="flex flex-col items-center gap-6 px-6 py-10 text-center sm:px-10">
            <span className="grid size-12 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand-bright">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="text-xl font-semibold tracking-tight break-all text-fg transition-colors hover:text-brand-bright sm:text-2xl"
            >
              {profile.email}
            </a>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Obaidullah')}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white transition-colors hover:bg-brand-bright"
              >
                Send an email
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <CopyEmailButton />
            </div>
          </div>

          <ul className="grid border-t border-line sm:grid-cols-2">
            {socials.map((social, index) => {
              const Icon = socialIcons[social.id]
              return (
                <li key={social.id} className={index > 0 ? 'border-t border-line sm:border-t-0 sm:border-l' : ''}>
                  <a
                    href={social.href}
                    {...external}
                    className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-brand/[0.06] sm:px-8"
                  >
                    <Icon className="size-5 text-muted group-hover:text-fg" />
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-fg">{social.label}</span>
                      <span className="block font-mono text-xs text-subtle">{social.handle}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-bright"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
