import { useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, m } from 'motion/react'
import { ArrowUpRight, X } from 'lucide-react'
import { navLinks } from '../../data/navigation.js'
import { socials } from '../../data/profile.js'
import { socialIcons } from '../common/icons/socialIcons.js'
import { external } from '../../utils/links.js'

export default function MobileMenu({ open, onClose }) {
  const closeRef = useRef(null)
  const { pathname } = useLocation()

  // Close whenever the route changes (covers links and browser back/forward).
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && onClose()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <m.div
          key="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink-950/95 backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container-page flex h-16 shrink-0 items-center justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-lg border border-line text-fg"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-between gap-10 pb-10">
            <ul className="mt-2 space-y-1">
              {navLinks.map((link, index) => (
                <m.li
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 rounded-lg py-3 text-3xl font-semibold tracking-tight ${
                        isActive ? 'text-fg' : 'text-muted'
                      }`
                    }
                  >
                    <span className="font-mono text-xs font-normal text-brand-bright">0{index + 1}</span>
                    {link.label}
                  </NavLink>
                </m.li>
              ))}
            </ul>

            <div className="space-y-6">
              <NavLink
                to="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand py-3.5 font-medium text-white"
              >
                Let&apos;s Talk <ArrowUpRight className="size-4" />
              </NavLink>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = socialIcons[social.id]
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      {...external}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line py-3 text-sm text-muted"
                    >
                      <Icon className="size-4" /> {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </nav>
        </m.div>
      )}
    </AnimatePresence>
  )
}
