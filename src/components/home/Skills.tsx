import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import SkillGroup from '../ui/SkillGroup'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

const skillsData = [
  {
    title: 'Visual Identity',
    items: ['Logo Design', 'Brand Identity', 'Typography', 'Color Systems', 'Brand Applications'],
  },
  {
    title: 'Graphic Design',
    items: ['Posters', 'Flyers', 'Brochures', 'Business Cards', 'Promotional Graphics'],
  },
  {
    title: 'Digital Design',
    items: [
      'Social Media Graphics',
      'Digital Campaigns',
      'Online Visual Content',
      'Creative Assets',
    ],
  },
  {
    title: 'Creative',
    items: [
      'Concept Development',
      'Visual Storytelling',
      'Art Direction',
      'Creative Direction',
      'Composition',
    ],
  },
]

export default function Skills() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title={
            <>
              Creative thinking.
              <br className="hidden sm:block" /> Visual execution.
            </>
          }
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillsData.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <SkillGroup title={group.title} items={group.items} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}