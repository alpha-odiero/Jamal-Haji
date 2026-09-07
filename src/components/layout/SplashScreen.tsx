import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { site } from '../../lib/site'
import jamalPhoto from '../../assets/jamal.jpeg'

interface SplashScreenProps {
  onDone: () => void
}

const nameLetters = site.name.split('')

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
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden bg-canvas"
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src={jamalPhoto}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover sm:hidden"
        />

        <motion.img
          src={jamalPhoto}
          alt={site.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden h-28 w-28 rounded-full object-cover ring-1 ring-line sm:block"
        />

        <div className="relative z-10 mt-6 flex items-baseline overflow-hidden pr-1">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 + i * 0.06 }}
              className={`font-display font-extrabold tracking-[0.18em] text-3xl text-ink sm:text-5xl ${
                letter === ' ' ? 'w-4 sm:w-6' : ''
              }`}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>

        <div className="relative z-10 mt-7 flex items-center gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-accent"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}