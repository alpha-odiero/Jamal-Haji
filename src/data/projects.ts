import jamalBrand from '../assets/jamal brand.png'
import jamalCard from '../assets/jamal bussiness card.png'
import jamalSocial from '../assets/jamal social media.png'
import brandIdentity from '../assets/brand identity.jpg'
import logoDesign from '../assets/logo design.jpg'
import graphicsChurch from '../assets/graphics church.jpg'
import graphics from '../assets/graphics.jpg'
import church from '../assets/church.jpg'
import socialMedia from '../assets/social media.jpg'
import socialMediaExtra from '../assets/social media..jpg'
import socialPoster from '../assets/social poster.jpg'
import creative from '../assets/creative.jpg'
import creative1 from '../assets/creative1.jpg'
import product from '../assets/product.jpg'
import earphones from '../assets/earphones.jpg'
import marketing from '../assets/marketing.jpg'
import marketing1 from '../assets/marketing1.jpg'
import run from '../assets/run.jpg'

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  year: string
  description: string
  featured: boolean
  coverImage: string | null
  heroImage: string | null
  gallery: (string | null)[]
  role: string
  tools: string[]
  overview: string
  creativeDirection: string
  concept?: string
  visualDirection?: string
  typography?: string
  color?: string
  composition?: string
  personality?: string
  palette?: { label: string; hex: string }[]
  applications?: string[]
}

export const projectFilters = [
  'All',
  'Brand Identity',
  'Logo Design',
  'Graphic Design',
  'Social Media',
  'Creative Design',
  'Marketing',
] as const

export const projects: Project[] = [
  {
    id: 1,
    slug: 'jamal-graphex',
    title: 'Jamal Graphex',
    category: 'Brand Identity',
    year: '2026',
    description:
      'A visual identity built around creativity, personality and visual expression.',
    featured: true,
    coverImage: jamalBrand,
    heroImage: jamalBrand,
    gallery: [jamalBrand, jamalCard, jamalSocial],
    role: 'Graphic & Creative Designer',
    tools: ['Brand Strategy', 'Logo Design', 'Typography', 'Color Systems'],
    overview:
      'Jamal Graphex is a personal creative brand built around a vision of turning ideas into visuals that people remember. The identity brings together expressive typography, a controlled color palette and a strong, memorable mark that reflects a thoughtful, human approach to design.',
    creativeDirection:
      'The identity is built around the letter mark J.G., combining clean geometric structure with a warm, human accent. The visual language leans on editorial typography, generous whitespace and a single distinctive accent color.',
    concept:
      'The concept centers on the studio as a space where ideas find their visual identity — a mark that is both simple and expressive enough to carry brand identity, posters and digital work.',
    visualDirection:
      'Bold, human and editorial. The system pairs strong display type with clean, generous layouts and a warm neutral canvas.',
    typography: 'A modern grotesque paired with a geometric display face for confident headlines.',
    color: 'Warm off-white and near-black, punctuated by a single amber accent.',
    composition: 'Large type, open layouts and intentional whitespace give every piece room to breathe.',
    personality: 'Confident, modern, human and quietly premium.',
    palette: [
      { label: 'Ink', hex: '#1a1713' },
      { label: 'Canvas', hex: '#faf8f4' },
      { label: 'Accent', hex: '#e2601a' },
      { label: 'Card', hex: '#fcfbf8' },
    ],
    applications: ['Logo', 'Business card', 'Typography', 'Color system', 'Social media'],
  },
  {
    id: 2,
    slug: 'brand-identity-project',
    title: 'Brand Identity',
    category: 'Brand Identity',
    year: '2025',
    description:
      'A visual identity system developed around clarity, consistency and brand personality.',
    featured: false,
    coverImage: brandIdentity,
    heroImage: brandIdentity,
    gallery: [brandIdentity],
    role: 'Graphic Designer',
    tools: ['Logo Design', 'Typography', 'Color Systems', 'Brand Guidelines'],
    overview:
      'This project focused on building a complete visual identity that communicates the brand\'s core values through a cohesive system of logo, typography, color and supporting brand elements.',
    creativeDirection:
      'The direction prioritized simplicity and recognisability — creating a mark and visual system that stays consistent across every application while still feeling distinctive.',
  },
  {
    id: 3,
    slug: 'logo-design',
    title: 'Logo Design',
    category: 'Logo Design',
    year: '2025',
    description:
      'A distinctive logo mark designed to communicate purpose in a single, memorable form.',
    featured: false,
    coverImage: logoDesign,
    heroImage: logoDesign,
    gallery: [logoDesign],
    role: 'Graphic Designer',
    tools: ['Concept Development', 'Vector Design', 'Logo Construction'],
    overview:
      'The brief called for a logo that feels both simple and expressive — a mark that communicates the brand\'s personality clearly while remaining flexible across different sizes and surfaces.',
    creativeDirection:
      'Multiple directions were explored before settling on a mark that balances geometric clarity with a human touch, resulting in something that feels both modern and approachable.',
  },
  {
    id: 4,
    slug: 'church-graphic-design',
    title: 'Church Graphic Design',
    category: 'Graphic Design',
    year: '2025',
    description:
      'Visual materials designed to communicate with clarity and a warm, welcoming tone.',
    featured: false,
    coverImage: graphicsChurch,
    heroImage: graphicsChurch,
    gallery: [graphicsChurch, graphics, church],
    role: 'Graphic Designer',
    tools: ['Poster Design', 'Typography', 'Layout', 'Print Production'],
    overview:
      'The project involved creating graphic materials for church events and communication — posters, flyers and visual pieces designed to feel approachable while maintaining a clean, professional quality.',
    creativeDirection:
      'The visual direction focused on warmth, clarity and readability — using typography and composition to guide the eye while keeping the overall feeling welcoming and calm.',
  },
  {
    id: 5,
    slug: 'social-media-design',
    title: 'Social Media Design',
    category: 'Social Media',
    year: '2025',
    description:
      'Visually consistent social content created for effective online communication.',
    featured: false,
    coverImage: socialMedia,
    heroImage: socialMedia,
    gallery: [socialMedia, socialPoster, socialMediaExtra],
    role: 'Graphic Designer',
    tools: ['Social Media Templates', 'Typography', 'Brand Consistency'],
    overview:
      'The project required creating a range of social media visuals — from post graphics to story layouts — designed to look cohesive and professional while adapting to each platform\'s requirements.',
    creativeDirection:
      'The system relies on consistent typography, color and layout structures that keep every post recognisable, even as the content changes from one piece to the next.',
  },
  {
    id: 6,
    slug: 'creative-design',
    title: 'Creative Design',
    category: 'Creative Design',
    year: '2025',
    description:
      'Original visual work developed through concept exploration and creative direction.',
    featured: false,
    coverImage: creative,
    heroImage: creative,
    gallery: [creative, creative1, product, earphones],
    role: 'Creative Designer',
    tools: ['Concept Development', 'Visual Storytelling', 'Art Direction'],
    overview:
      'This project explored creative visual directions that turn an idea into a visual experience — focusing on originality, storytelling and the kind of visual personality that makes a piece stand out.',
    creativeDirection:
      'The work moved through several conceptual phases before arriving at a direction that balances expressive visual language with clear communication.',
  },
  {
    id: 7,
    slug: 'marketing-materials',
    title: 'Marketing Materials',
    category: 'Marketing',
    year: '2025',
    description:
      'Professional promotional materials designed for business and campaign use.',
    featured: false,
    coverImage: marketing,
    heroImage: marketing,
    gallery: [marketing, marketing1, run],
    role: 'Graphic Designer',
    tools: ['Flyer Design', 'Poster Design', 'Print Layout', 'Typography'],
    overview:
      'The project involved designing marketing materials — flyers, posters and promotional pieces — that communicate clearly while maintaining a polished, professional quality suitable for print and digital use.',
    creativeDirection:
      'The direction focused on strong visual hierarchy, readable typography and layouts that guide the viewer toward the key message without unnecessary decoration.',
  },
  {
    id: 8,
    slug: 'church-poster-series',
    title: 'Church Poster Series',
    category: 'Graphic Design',
    year: '2025',
    description:
      'A series of posters designed for church events, balancing warmth with clarity.',
    featured: false,
    coverImage: graphics,
    heroImage: graphics,
    gallery: [graphics, graphicsChurch, church],
    role: 'Graphic Designer',
    tools: ['Poster Design', 'Typography', 'Print Production'],
    overview:
      'The series covers a range of church events with a shared visual voice — each poster readable at a glance, warm in tone and consistent in structure, while leaving room for every event to feel distinct.',
    creativeDirection:
      'Typography leads the layout, with calm composition and a measured colour range that keeps the set cohesive across print and digital use.',
  },
  {
    id: 9,
    slug: 'church-event-posters',
    title: 'Church Event Posters',
    category: 'Graphic Design',
    year: '2025',
    description:
      'Event posters built on a clean, welcoming visual structure.',
    featured: false,
    coverImage: church,
    heroImage: church,
    gallery: [church, graphicsChurch, graphics],
    role: 'Graphic Designer',
    tools: ['Poster Design', 'Typography', 'Print Production'],
    overview:
      'Designing a set of event posters required a layout system that could flex between announcements, invitations and reminders while staying recognisable. The result is a calm, focused visual family.',
    creativeDirection:
      'Strong headline hierarchy, generous spacing and a warm neutral palette make each message clear and the overall tone inviting.',
  },
  {
    id: 10,
    slug: 'social-media-poster-pack',
    title: 'Social Media Poster Pack',
    category: 'Social Media',
    year: '2025',
    description:
      'A pack of social posters sharing one consistent visual system.',
    featured: false,
    coverImage: socialPoster,
    heroImage: socialPoster,
    gallery: [socialPoster, socialMedia, socialMediaExtra],
    role: 'Graphic Designer',
    tools: ['Social Media Templates', 'Typography', 'Brand Consistency'],
    overview:
      'This poster pack demonstrates how a single design system can carry a range of messages — quotes, announcements and promotions — without losing its identity across the feed.',
    creativeDirection:
      'A consistent type scale, colour and grid keep every piece recognisable, while each poster rearranges those elements so the set stays fresh instead of repetitive.',
  },
  {
    id: 11,
    slug: 'social-media-collection',
    title: 'Social Media Collection',
    category: 'Social Media',
    year: '2025',
    description:
      'A collection of social visuals exploring layout, colour and format.',
    featured: false,
    coverImage: socialMediaExtra,
    heroImage: socialMediaExtra,
    gallery: [socialMediaExtra, socialMedia, socialPoster],
    role: 'Graphic Designer',
    tools: ['Social Media Templates', 'Layout', 'Visual Systems'],
    overview:
      'A broader collection of social media visuals — from single posts to multi-format sets — built around experimental layouts that still hold together as one body of work.',
    creativeDirection:
      'Layout variety is balanced by a shared type and colour language, so the collection feels exploratory without losing editorial control.',
  },
  {
    id: 12,
    slug: 'creative-visual-series',
    title: 'Creative Visual Series',
    category: 'Creative Design',
    year: '2025',
    description:
      'Original visual explorations built on typography and colour.',
    featured: false,
    coverImage: creative1,
    heroImage: creative1,
    gallery: [creative1, creative, product, earphones],
    role: 'Creative Designer',
    tools: ['Concept Development', 'Art Direction', 'Visual Storytelling'],
    overview:
      'A series of independent visual pieces developed as creative exploration — each one tests a different combination of type, colour and composition while sharing a confident, expressive voice.',
    creativeDirection:
      'Each piece pushes a single idea — bold type, unusual colour or dynamic layout — keeping the series varied but recognisably from one hand.',
  },
  {
    id: 13,
    slug: 'product-visual',
    title: 'Product Visual',
    category: 'Creative Design',
    year: '2025',
    description:
      'A product-focused visual built around the object as the hero.',
    featured: false,
    coverImage: product,
    heroImage: product,
    gallery: [product, creative, creative1, earphones],
    role: 'Creative Designer',
    tools: ['Product Visualization', 'Art Direction', 'Typography'],
    overview:
      'The brief was to present a product simply and memorably — letting the object lead the frame while supporting typography and background stay quiet enough to enhance rather than compete.',
    creativeDirection:
      'Negative space and a restrained palette frame the product, with type used sparingly to anchor the composition without overwhelming it.',
  },
  {
    id: 14,
    slug: 'earphones-advert',
    title: 'Earphones Advert',
    category: 'Creative Design',
    year: '2025',
    description:
      'An advert visual where product and type share the spotlight.',
    featured: false,
    coverImage: earphones,
    heroImage: earphones,
    gallery: [earphones, creative, creative1, product],
    role: 'Creative Designer',
    tools: ['Product Visualization', 'Ad Design', 'Typography'],
    overview:
      'An advert focused on clean presentation — the product sits prominently in frame while headline type works with the composition to deliver a short, punchy message.',
    creativeDirection:
      'A high-contrast background and direct composition make the ad read instantly, with typography integrated as part of the visual rather than an afterthought.',
  },
  {
    id: 15,
    slug: 'marketing-campaign',
    title: 'Marketing Campaign',
    category: 'Marketing',
    year: '2025',
    description:
      'Campaign visuals built for clarity and immediate message impact.',
    featured: false,
    coverImage: marketing1,
    heroImage: marketing1,
    gallery: [marketing1, marketing, run],
    role: 'Graphic Designer',
    tools: ['Flyer Design', 'Campaign Layout', 'Typography'],
    overview:
      'The campaign needed to stop, inform and persuade in a single glance — strong hierarchy, direct type and clear calls-to-action across a set of flyers and promotional pieces.',
    creativeDirection:
      'Bold headlines and structured layouts put the message first, while restrained decoration keeps every piece professional and on-brand.',
  },
  {
    id: 16,
    slug: 'campaign-artwork',
    title: 'Campaign Artwork',
    category: 'Marketing',
    year: '2025',
    description:
      'Promotional artwork pairing dynamic imagery with direct messaging.',
    featured: false,
    coverImage: run,
    heroImage: run,
    gallery: [run, marketing, marketing1],
    role: 'Graphic Designer',
    tools: ['Poster Design', 'Campaign Artwork', 'Layout'],
    overview:
      'An energetic promotional piece designed to catch attention and reinforce the campaign idea — blending strong imagery with confident, direct type.',
    creativeDirection:
      'Motion and contrast drive the composition, with messaging placed to remain readable at distance and across print sizes.',
  },
]