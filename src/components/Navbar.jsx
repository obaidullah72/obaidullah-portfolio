import { useCallback, useState } from 'react'
import { Menu } from 'lucide-react'
import { navLinks, profile } from '../data/site.js'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { useScrolled } from '../hooks/useScrolled.js'
import MobileMenu from './MobileMenu.jsx'
import Monogram from './Monogram.jsx'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'border-line bg-ink-950/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
          <a href="#home" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
            <Monogram />
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-ink-900/60 p-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-full px-4 py-1.5 text-sm transition-colors ${
                      isActive ? 'bg-ink-700 text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-bright sm:inline-flex"
            >
              Let&apos;s Talk
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid size-11 place-items-center rounded-lg border border-line text-fg transition-colors hover:border-line-strong lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} active={active} />
    </>
  )
}
