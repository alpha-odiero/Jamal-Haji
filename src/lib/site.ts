export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
] as const

/**
 * Single source of truth for brand + SEO defaults.
 * The production URL is used for canonical links, Open Graph and JSON-LD,
 * so every page resolves to one canonical domain.
 */
export const SEO = {
  // Person-level identity (used in titles and structured data)
  personName: 'Eugene Mulah',
  jobTitle: 'Graphic & Creative Designer',
  // Homepage defaults
  title: 'Eugene Mulah | Graphic & Creative Designer',
  description:
    'Eugene Mulah is a graphic and creative designer specializing in brand identity, logo design, graphic design, social media design and creative design solutions.',
  // Social / metadata defaults
  locale: 'en_US',
  themeColorLight: '#faf8f4',
  themeColorDark: '#191513',
  ogType: 'website',
  // Absolute handler used in the site (phone / WhatsApp are real, from the site)
  telephone: '+254729313539',
} as const

export const site = {
  // Deployed production URL (used for canonical, Open Graph and JSON-LD)
  url: 'https://jamal-haji.vercel.app',
  // Personal brand shown across the site
  name: 'EUGENE MULAH',
  // Studio / brand used in the copyright line
  studio: 'EUGENE JAMAL',
  role: 'Graphic Designer · Creative Designer',
  statement: 'Turning ideas into visual experiences.',
  phone: '0729313539',
  email: 'genejones426@gmail.com',
  phoneHref: 'tel:0729313539',
  emailHref: 'mailto:genejones426@gmail.com',
  whatsappHref: 'https://wa.me/254729313539',
  whatsappLabel: '0729313539',
  // Shared social share image (absolute, so OG/Twitter previews work anywhere)
  ogImage: 'https://jamal-haji.vercel.app/og-image.jpg',
}

export const DEFAULT_DESCRIPTION = SEO.description
export const DEFAULT_TITLE = SEO.title