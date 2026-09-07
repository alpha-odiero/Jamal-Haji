import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import DesignImage from '../ui/DesignImage'

interface ProjectCardProps {
  project: Project
  aspect?: string
  size?: 'default' | 'feature' | 'wide' | 'tall'
}

export default function ProjectCard({ project, aspect, size = 'default' }: ProjectCardProps) {
  const aspectClass =
    aspect ??
    (size === 'feature'
      ? 'aspect-[4/4]'
      : size === 'wide'
        ? 'aspect-[16/10]'
        : size === 'tall'
          ? 'aspect-[3/4]'
          : 'aspect-[4/3]')

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col"
      aria-label={`View project: ${project.title}`}
    >
      <DesignImage
        src={project.coverImage}
        alt={`${project.title} — ${project.category}`}
        label={project.title}
        aspect={`grow ${aspectClass}`}
        className="rounded-2xl border border-line bg-card shadow-soft transition-all duration-500 group-hover:shadow-lift group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {project.category}
          </p>
          <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
        </div>
        <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
