import { motion } from 'framer-motion'
import { stagger, fadeUp, viewportOnce } from '../../lib/motion'
import type { Project } from '../../data/projects'
import ProjectCard from './ProjectCard'
import type { ReactNode } from 'react'

interface ProjectGridProps {
  projects: Project[]
  className?: string
  renderFooter?: (project: Project) => ReactNode
  size?: 'default' | 'feature' | 'wide' | 'tall'
}

export default function ProjectGrid({
  projects,
  className = '',
  renderFooter,
  size = 'default',
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-card/50 px-6 py-20 text-center">
        <p className="font-display text-xl font-bold text-ink">No projects here yet.</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          New work will appear here. Check back soon, or get in touch to start something
          together.
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${className}`}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeUp} className="h-full">
          <ProjectCard project={project} size={size} />
          {renderFooter?.(project)}
        </motion.div>
      ))}
    </motion.div>
  )
}