import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import { homeServices } from '../../data/services'
import { serviceVisuals } from '../../lib/serviceVisuals'

export default function DesignServices() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What I Do"
            title={
              <>
                Designing ideas
                <br className="hidden sm:block" /> into visual experiences.
              </>
            }
            description="From identities to individual visuals, I create designs that help ideas communicate clearly and look their best."
          />
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homeServices.map((service, i) => {
            const visual = serviceVisuals[i % serviceVisuals.length]
            return (
              <motion.div key={service.id} variants={fadeUp}>
                <ServiceCard
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  icon={visual.icon}
                  iconChipClass={visual.chipClass}
                  iconColorClass={visual.iconClass}
                  linkTo={`/projects?category=${encodeURIComponent(service.filter)}`}
                  linkLabel="Explore Work"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}