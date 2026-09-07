import { NavLink } from 'react-router-dom'
import { NAV_LINKS, site } from '../../lib/site'
import Button from '../ui/Button'

interface NavbarProps {
  scrolled: boolean
  onMenuToggle: () => void
  menuOpen: boolean
}

export default function Navbar({ scrolled, onMenuToggle, menuOpen }: NavbarProps) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-soft' : 'shadow-none'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-page items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12"
      >
        <NavLink
          to="/"
          className="font-display text-sm font-bold tracking-[0.08em] text-ink"
          aria-label={`${site.name} — Home`}
        >
          <span className="border-b border-accent pb-0.5">{site.name.split(' ')[0]}</span> {site.name.split(' ').slice(1).join(' ')}
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `link-underline text-sm font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" className="px-5 py-2.5">
            Let&apos;s Work Together
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="lg:hidden p-1.5"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="flex flex-col items-end gap-1.5">
            <span
              className={`h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? 'w-5 translate-y-2 rotate-45' : 'w-6'
              }`}
            />
            <span
              className={`h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? 'w-5 opacity-0' : 'w-5'
              }`}
            />
            <span
              className={`h-0.5 bg-ink transition-all duration-300 ${
                menuOpen ? 'w-5 -translate-y-2 -rotate-45' : 'w-4'
              }`}
            />
          </span>
        </button>

      </nav>
    </header>
  )
}
