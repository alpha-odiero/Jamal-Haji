import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { site } from '../../lib/site'

interface SplashScreenProps {
  onDone: () => void
}

const brandLetters = 'JAMAL HAJI'.split('')

export default function SplashScreen({ onDone }: SplashScreenProps) {
  useEffect(() => {
    const minTime = new Promise<void>((resolve) => setTimeout(resolve, 3000))
    const pageLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener('load', () => resolve(), { once: true })
            setTimeout(resolve, 3000)
          })

    let cancelled = false
    Promise.all([minTime, pageLoaded]).then(() => {
      if (!cancelled) onDone()
    })

    return () => {
      cancelled = true
    }
  }, [onDone])

  return (
    <motion.div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-canvas"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline overflow-hidden pr-1">
        {brandLetters.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 + i * 0.06 }}
            className={`font-display font-extrabold tracking-[0.18em] ${
              letter === ' ' ? 'w-4 sm:w-6' : ''
            } ${letter === 'J' && i === 0 ? 'text-3xl sm:text-5xl' : 'text-3xl text-ink sm:text-5xl'}`}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.08 + brandLetters.length * 0.06 }}
          className="ml-3 h-2 w-2 rounded-full bg-accent sm:h-2.5 sm:w-2.5"
          aria-hidden="true"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-5 text-[10px] font-semibold uppercase tracking-[0.4em] text-ink-soft sm:text-xs"
      >
        {site.studio}
      </motion.p>

      <div className="mt-8 h-px w-40 overflow-hidden rounded-full bg-line">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.6, ease: 'easeInOut', delay: 0.3 }}
          className="h-full origin-left bg-accent"
        />
      </div>
    </motion.div>
  )
}