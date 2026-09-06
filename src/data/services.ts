export interface Service {
  id: number
  number: string
  title: string
  description: string
  deliverables?: string[]
}

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    title: 'Brand Identity',
    description:
      'Developing a consistent visual identity for brands that want to be recognizable and memorable.',
    deliverables: ['Logo system', 'Color palette', 'Typography', 'Brand guidelines'],
  },
  {
    id: 2,
    number: '02',
    title: 'Logo Design',
    description:
      'Creating distinctive logos that communicate the personality and purpose of a brand.',
    deliverables: ['Concept exploration', 'Final marks', 'Logo variations'],
  },
  {
    id: 3,
    number: '03',
    title: 'Graphic Design',
    description:
      'Creating visual materials for businesses, events, campaigns and personal projects.',
    deliverables: ['Posters', 'Flyers', 'Brochures', 'Business cards'],
  },
  {
    id: 4,
    number: '04',
    title: 'Social Media Design',
    description:
      'Creating visually consistent content designed for digital platforms.',
    deliverables: ['Post templates', 'Story visuals', 'Profile visuals'],
  },
  {
    id: 5,
    number: '05',
    title: 'Marketing Materials',
    description:
      'Designing flyers, posters, brochures, business cards and other promotional materials.',
    deliverables: ['Print-ready files', 'Digital assets', 'Promotional graphics'],
  },
  {
    id: 6,
    number: '06',
    title: 'Creative Design',
    description:
      'Taking an idea and exploring creative visual directions to communicate it effectively.',
    deliverables: ['Concept development', 'Visual direction', 'Final artwork'],
  },
]

export interface HomeService {
  id: number
  number: string
  title: string
  description: string
  /** Project category the "Explore" action filters to. */
  filter: string
}

export const homeServices: HomeService[] = [
  {
    id: 1,
    number: '01',
    title: 'Brand Identity',
    filter: 'Brand Identity',
    description:
      'Creating recognizable visual systems that give brands personality and consistency.',
  },
  {
    id: 2,
    number: '02',
    title: 'Logo Design',
    filter: 'Logo Design',
    description:
      'Creating distinctive marks that communicate an idea in a simple and memorable way.',
  },
  {
    id: 3,
    number: '03',
    title: 'Graphic Design',
    filter: 'Graphic Design',
    description:
      'Designing posters, flyers, promotional materials and other visual communication.',
  },
  {
    id: 4,
    number: '04',
    title: 'Social Media Design',
    filter: 'Social Media',
    description:
      'Creating engaging visuals that help brands communicate effectively online.',
  },
  {
    id: 5,
    number: '05',
    title: 'Creative Design',
    filter: 'Creative Design',
    description:
      'Turning concepts and ideas into original visual experiences.',
  },
  {
    id: 6,
    number: '06',
    title: 'Marketing Materials',
    filter: 'Marketing',
    description:
      'Designing professional visual materials for businesses, campaigns and events.',
  },
]
