import { useState } from 'react'

interface DesignImageProps {
  src: string | null | undefined
  alt: string
  className?: string
  aspect?: string
  priority?: boolean
  gradientFrom?: string
  gradientTo?: string
  label?: string
  children?: React.ReactNode
}

/**
 * Reusable image container.
 * - Loads a real image when a src is provided.
 * - Falls back to a styled, clearly-replaceable placeholder with a label
 *   (never presented as real client work).
 * - Lazy-loads below-the-fold images unless priority is set.
 */
export default function DesignImage({
  src,
  alt,
  className = '',
  aspect = 'aspect-[4/3]',
  priority = false,
  gradientFrom = 'var(--placeholder-1)',
  gradientTo = 'var(--placeholder-2)',
  label,
  children,
}: DesignImageProps) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  function handleError() {
    setFailed(true)
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${className}`}
      role="img"
      aria-label={alt}
    >
      {showPlaceholder ? (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
        >
          {label && (
            <span className="font-display text-2xl font-bold tracking-tight text-ink/70">
              {label}
            </span>
          )}
          <span className="max-w-[18ch] text-xs uppercase tracking-[0.2em] text-ink/45">
            Design placeholder — replace with art
          </span>
          {children}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )
}
