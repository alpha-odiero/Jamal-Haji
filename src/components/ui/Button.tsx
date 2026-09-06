import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost' | 'accent'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  className?: string
  showArrow?: boolean
  'aria-label'?: string
  onClick?: () => void
}

interface LinkButtonProps extends BaseProps {
  to: string
  href?: never
}

interface AnchorButtonProps extends BaseProps {
  href: string
  to?: never
}

type ButtonProps = LinkButtonProps | AnchorButtonProps

const styles: Record<Variant, string> = {
  primary:
    'bg-ink text-canvas hover:bg-accent hover:text-ink border border-ink hover:border-accent',
  outline:
    'border border-ink/25 text-ink hover:border-accent hover:text-accent',
  ghost: 'text-ink hover:text-accent',
  accent: 'bg-accent text-ink hover:bg-canvas border border-accent hover:border-canvas',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  showArrow = true,
  to,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = [
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300',
    styles[variant],
    className,
  ].join(' ')

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to!} onClick={onClick} className={classes} {...rest}>
      {content}
    </Link>
  )
}
