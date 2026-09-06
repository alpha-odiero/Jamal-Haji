import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../lib/motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
  as?: 'h1' | 'h2'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: HeadingTag = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-3 ${alignClass} ${className}`}
    >
      {eyebrow && <p className="eyebrow justify-start">{eyebrow}</p>}
      <HeadingTag className="text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl lg:text-4xl">
        {title}
      </HeadingTag>
      {description && (
        <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
      )}
    </motion.header>
  )
}
