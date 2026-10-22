import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { GITHUB_URL, profile } from '../../data/profile.js'
import { useScrolled } from '../../hooks/useScrolled.js'
import { external } from '../../utils/links.js'
import { GithubIcon } from '../common/icons/BrandIcons.jsx'
import MobileMenu from './MobileMenu.jsx'
import Monogram from './Monogram.jsx'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? 'border-line bg-ink-950/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
            <Monogram />
            <span className="hidden text-sm font-medium tracking-tight text-fg sm:block">{profile.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-line bg-ink-900/60 p-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-ink-700 text-fg shadow-[inset_0_0_0_1px_rgb(96_165_250/0.25)]'
                        : 'text-muted hover:text-fg'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              {...external}
              aria-label="GitHub profile (opens in a new tab)"
              className="hidden size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-strong hover:text-fg sm:grid"
            >
              <GithubIcon className="size-[18px]" />
            </a>
            <Link
              to="/contact"
              className="hidden min-h-10 items-center rounded-lg bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand-bright sm:inline-flex"
            >
              Let&apos;s Talk
            </Link>
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
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
