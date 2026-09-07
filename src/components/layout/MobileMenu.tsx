import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, site } from '../../lib/site'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import ThemeToggle from '../ui/ThemeToggle'
import type { Theme } from '../../hooks/useTheme'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  theme: Theme
  onToggleTheme: () => void
}

export default function MobileMenu({ open, onClose, theme, onToggleTheme }: MobileMenuProps) {
  // Prevent body scrolling while the menu is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Close on escape for accessibility.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-16 z-30 bg-canvas/95 backdrop-blur-md lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex h-full flex-col px-5 pb-8 pt-4 sm:px-8">
            <div className="flex justify-end pb-2">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            </div>
            <ul className="flex flex-col divide-y divide-line">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-4 py-3.5 font-display text-xl font-bold tracking-tight transition-colors sm:text-2xl ${
                        isActive ? 'text-accent' : 'text-ink'
                      }`
                    }
                  >
                    <span className="w-6 text-xs font-medium tracking-widest text-ink-faint">
                      0{i + 1}
                    </span>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="mt-auto flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform duration-300 hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}