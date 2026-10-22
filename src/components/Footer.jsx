import { ArrowUp } from 'lucide-react'
import { profile, socials } from '../data/site.js'
import { socialIcons } from './icons/socialIcons.js'
import { external } from '../utils/links.js'
import Monogram from './Monogram.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink-950">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Monogram />
          <div>
            <p className="text-sm font-medium text-fg">{profile.name}</p>
            <p className="text-sm text-subtle">Building web, mobile and AI products.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
          {socials.map((social) => {
            const Icon = socialIcons[social.id]
            return (
              <a
                key={social.id}
                href={social.href}
                {...external}
                className="inline-flex min-h-11 items-center gap-2 hover:text-fg"
              >
                <Icon className="size-4" />
                {social.label}
              </a>
            )
          })}
          <a href="#home" className="inline-flex min-h-11 items-center gap-1.5 hover:text-fg">
            Back to top <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hairline" />
      <p className="container-page py-6 text-xs text-subtle">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
