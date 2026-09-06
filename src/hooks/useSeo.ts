import { useEffect } from 'react'
import { site } from '../lib/site'

interface SeoProps {
  title: string
  description?: string
  ogType?: string
  noindex?: boolean
}

const DEFAULT_DESCRIPTION =
  'Jamal Haji is a graphic and creative designer who transforms ideas into visually appealing brand identities, logos, graphics and creative experiences.'

/**
 * Per-route SEO helper.
 * Updates the document title, meta description, canonical URL, Open Graph and
 * Twitter tags, plus robots directives. Absolute URLs are built from the
 * production site URL so search engines see one canonical domain.
 * Structured data (JSON-LD) is injected once per session.
 */
export default function useSeo({
  title,
  description,
  ogType = 'website',
  noindex = false,
}: SeoProps) {
  useEffect(() => {
    const url = site.url + window.location.pathname
    const desc = description ?? DEFAULT_DESCRIPTION

    document.title = title

    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:card', 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', desc)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    ensureSchema()
  }, [title, description, ogType, noindex])
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Injects a JSON-LD graph (business + person) once, using the production URL. */
function ensureSchema() {
  if (document.head.querySelector('script[data-seo-schema]')) return

  const origin = site.url
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#business`,
        name: site.studio,
        alternateName: site.name,
        description: site.statement,
        url: origin,
        founder: { '@type': 'Person', name: 'Jamal Haji' },
        telephone: '+254729313539',
        email: site.email,
        priceRange: '$$',
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: 'Jamal Haji',
        url: origin,
        jobTitle: 'Graphic & Creative Designer',
        worksFor: { '@id': `${origin}/#business` },
        knowsAbout: [
          'Brand Identity',
          'Logo Design',
          'Graphic Design',
          'Social Media Design',
          'Marketing Materials',
          'Creative Design',
        ],
      },
    ],
  }

  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.setAttribute('data-seo-schema', 'true')
  el.textContent = JSON.stringify(schema)
  document.head.appendChild(el)
}