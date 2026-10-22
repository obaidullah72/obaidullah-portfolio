import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { profile, socials } from '../../data/profile.js'
import { socialIcons } from '../common/icons/socialIcons.js'
import { external } from '../../utils/links.js'
import Monogram from './Monogram.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-ink-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label={`${profile.name}, home`}>
            <Monogram />
            <span className="font-medium text-fg">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{profile.tagline}</p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-block text-sm text-brand-bright hover:text-fg">
            {profile.email}
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Pages</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-block py-1 text-muted hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Elsewhere</p>
          <ul className="space-y-2 text-sm">
            {socials.map((social) => {
              const Icon = socialIcons[social.id]
              return (
                <li key={social.id}>
                  <a href={social.href} {...external} className="inline-flex items-center gap-2 py-1 text-muted hover:text-fg">
                    <Icon className="size-4" />
                    {social.label}
                    <span className="font-mono text-xs text-subtle">{social.handle}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="hairline" />
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-6 text-xs text-subtle">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            })
          }
          className="inline-flex min-h-11 items-center gap-1.5 hover:text-fg"
        >
          Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  )
}
