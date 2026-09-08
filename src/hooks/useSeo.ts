import { useEffect } from 'react'
import { SEO, site, DEFAULT_DESCRIPTION } from '../lib/site'
import { services } from '../data/services'

interface SeoProps {
  title: string
  description?: string
  noindex?: boolean
  ogType?: string
  /** Optional absolute preview image (defaults to the shared open-graph image). */
  image?: string
  /** Page-level JSON-LD (single object or array) injected for this route. */
  schema?: object | object[]
}

const SITE_SCHEMA_KEY = 'site-schema'
const PAGE_SCHEMA_KEY = 'page-schema'

/**
 * Clean canonical path: strip any trailing slash (keep root "/").
 */
function canonicalPath(pathname: string): string {
  if (pathname === '/' || !pathname) return '/'
  return pathname.replace(/\/+$/, '')
}

/**
 * Client-side SEO helper for the Vite SPA.
 * Updates the document title, meta description, canonical URL, Open Graph and
 * Twitter tags, plus robots directives. Absolute URLs are built from the
 * production site URL so search engines see one canonical domain.
 * Site-level structured data (WebSite + ProfessionalService + Person) is
 * injected once; page-level JSON-LD is refreshed on every route.
 */
export default function useSeo({
  title,
  description,
  noindex = false,
  ogType = SEO.ogType,
  image = site.ogImage,
  schema,
}: SeoProps) {
  useEffect(() => {
    const desc = description ?? DEFAULT_DESCRIPTION
    const url = site.url + canonicalPath(window.location.pathname)

    document.title = title

    setMeta('name', 'description', desc)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')

    // Open Graph
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:image:alt', SEO.personName)
    setMeta('property', 'og:site_name', SEO.personName)
    setMeta('property', 'og:locale', SEO.locale)

    // Twitter / X
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', image)

    // Canonical (self-referencing, query strings can't exist in pathname)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    ensureSiteSchema()
    setPageSchema(schema)

    return () => {
      // Remove page-level schema when leaving the route.
      document.head
        .querySelectorAll(`script[data-jsonld="${PAGE_SCHEMA_KEY}"]`)
        .forEach((el) => el.remove())
    }
  }, [title, description, noindex, ogType, image, schema])
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

function upsertScript(id: string, json: object) {
  document.head.querySelectorAll(`script[data-jsonld="${id}"]`).forEach((el) => el.remove())
  const el = document.createElement('script')
  el.type = 'application/ld+json'
  el.setAttribute('data-jsonld', id)
  el.textContent = JSON.stringify(json)
  document.head.appendChild(el)
}

/** Site-level structured data (WebSite + ProfessionalService + Person). */
function ensureSiteSchema() {
  if (document.head.querySelector(`script[data-jsonld="${SITE_SCHEMA_KEY}"]`)) return

  const origin = site.url
  const knowsAbout = services.map((s) => s.title)

  upsertScript(SITE_SCHEMA_KEY, {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: SEO.personName,
        description: DEFAULT_DESCRIPTION,
        inLanguage: 'en',
        publisher: { '@id': `${origin}/#person` },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${origin}/#business`,
        name: site.studio,
        alternateName: site.name,
        description: site.statement,
        url: origin,
        founder: { '@id': `${origin}/#person` },
        telephone: SEO.telephone,
        email: site.email,
      },
      {
        '@type': 'Person',
        '@id': `${origin}/#person`,
        name: SEO.personName,
        jobTitle: SEO.jobTitle,
        url: origin,
        worksFor: { '@id': `${origin}/#business` },
        knowsAbout,
      },
    ],
  })
}

/** Injects the current route's JSON-LD (replacing the previous route's). */
function setPageSchema(schema?: object | object[]) {
  if (!schema) {
    document.head
      .querySelectorAll(`script[data-jsonld="${PAGE_SCHEMA_KEY}"]`)
      .forEach((el) => el.remove())
    return
  }
  upsertScript(PAGE_SCHEMA_KEY, schema)
}