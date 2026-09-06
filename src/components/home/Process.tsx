import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProcessStep from '../ui/ProcessStep'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'I start by understanding the idea, the audience and what the design needs to communicate.',
  },
  {
    number: '02',
    title: 'Explore',
    description:
      'I explore different visual directions, concepts, typography, composition and creative possibilities.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'Once the direction is clear, I develop the concept and bring the visual pieces together.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'I review the details, improve the composition and make sure every element feels intentional.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      "The final design is prepared and delivered according to the project's needs.",
  },
]

export default function Process() {
  return (
    <section className="bg-canvas-alt py-12 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="My Process"
          title="From idea to final design."
        />

        <div className="mt-10">
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-0 lg:space-y-0"
          >
            {steps.map((step) => (
              <motion.li
                key={step.number}
                variants={fadeUp}
                className="group border-b border-line py-5 first:border-t lg:flex lg:items-center lg:gap-12 lg:py-8"
              >
                <ProcessStep
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  )
}