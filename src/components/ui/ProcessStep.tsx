import type { ReactNode } from 'react'

interface ProcessStepProps {
  number: string
  title: string
  description: string
  children?: ReactNode
}

export default function ProcessStep({ number, title, description, children }: ProcessStepProps) {
  return (
    <div className="flex gap-6 sm:gap-8">
      <span className="font-display text-2xl font-bold tracking-tight text-ink-faint sm:text-3xl">
        {number}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
          {description}
        </p>
        {children}
      </div>
    </div>
  )
}
