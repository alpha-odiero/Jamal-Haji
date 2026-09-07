import { motion } from 'framer-motion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../projects/ProjectCard'
import { fadeUp, viewportOnce } from '../../lib/motion'
import { projects } from '../../data/projects'

export default function SelectedWork() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                A collection of ideas
                <br className="hidden sm:block" /> brought to life.
              </>
            }
          />
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-base leading-relaxed text-ink-soft lg:max-w-md lg:justify-self-end"
          >
            Every project begins with an idea. These are some of the visual directions,
            identities and designs created along the way.
          </motion.p>
        </div>

        {/* Editorial, non-uniform grid driven from project data */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => {
            const layout = index % 3 === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
            const size = index % 3 === 0 ? 'wide' : index % 3 === 1 ? 'tall' : 'default'
            return (
              <motion.div
                key={project.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`h-full ${layout} ${index % 3 === 1 ? 'lg:mt-16' : ''}`}
              >
                <ProjectCard project={project} size={size} />
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}