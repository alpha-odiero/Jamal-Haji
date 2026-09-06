export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
] as const

export const site = {
  // Deployed production URL (used for canonical, Open Graph and JSON-LD)
  url: 'https://jamal-haji.vercel.app',
  // Personal brand shown across the site
  name: 'JAMAL HAJI',
  // Studio / brand used in the copyright line
  studio: 'JAMAL GRAPHEX',
  role: 'Graphic Designer · Creative Designer',
  statement: 'Turning ideas into visual experiences.',
  phone: '0729313539',
  email: 'genejones426@gmail.com',
  phoneHref: 'tel:0729313539',
  emailHref: 'mailto:genejones426@gmail.com',
  whatsappHref: 'https://wa.me/254729313539',
  whatsappLabel: '0729313539',
}