import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  number: string
  title: string
  description: string
  icon?: LucideIcon
  iconChipClass?: string
  iconColorClass?: string
  linkTo?: string
  linkLabel?: string
  deliverables?: string[]
}

export default function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  iconChipClass = 'bg-canvas-alt',
  iconColorClass = 'text-ink',
  linkTo,
  linkLabel = 'Explore',
  deliverables,
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft">
      <div className="flex items-start justify-between">
        <span className="font-display text-sm font-bold tracking-widest text-ink-faint">
          {number}
        </span>
        {Icon && (
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${iconChipClass}`}
          >
            <Icon className={`h-5 w-5 ${iconColorClass}`} aria-hidden="true" />
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{description}</p>

      {deliverables && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
          {deliverables.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-ink-soft">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {linkTo && (
        <Link
          to={linkTo}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent"
        >
          {linkLabel}
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </article>
  )
}