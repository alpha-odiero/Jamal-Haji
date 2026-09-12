import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, site } from '../../lib/site'
import Container from '../ui/Container'
import SocialLinks from '../ui/SocialLinks'
import WhatsAppIcon from '../ui/WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-alt">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="font-display text-lg font-bold tracking-[0.08em] text-ink">
              {site.name}
            </Link>
            <p className="mt-2 text-sm text-ink-soft">
              {site.studio} · {site.role}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">{site.statement}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="eyebrow mb-4">Explore</h2>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="eyebrow mb-4">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="link-underline inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
              <li className="break-all">
                <a
                  href={site.emailHref}
                  className="link-underline inline-flex items-center gap-1 font-medium text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-emerald-600"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
                  <span className="link-underline">Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-ink"
            >
              Start a project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Social */}
          <div>
            <h2 className="eyebrow mb-4">Social</h2>
            <SocialLinks className="space-y-3" />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-6 text-center">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {site.studio}. All rights reserved.
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">
            Graphic &amp; Creative Design
          </p>
        </div>
      </Container>
    </footer>
  )
}