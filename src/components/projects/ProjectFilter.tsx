import { motion } from 'framer-motion'

interface ProjectFilterProps {
  filters: readonly string[]
  active: string
  onChange: (filter: string) => void
}

export default function ProjectFilter({ filters, active, onChange }: ProjectFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {filters.map((filter) => {
        const isActive = filter === active
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            aria-pressed={isActive}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        )
      })}
    </div>
  )
}
