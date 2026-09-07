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
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -32 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Mobile full-bleed background */}
      <motion.img
        src={jamalPhoto}
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover sm:hidden"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-b from-canvas/30 via-canvas/10 to-canvas sm:hidden"
        aria-hidden="true"
      />

      {/* Desktop circular avatar with pulsing rings */}
      <div className="relative hidden sm:block">
        <motion.span
          className="absolute inset-0 rounded-full border border-accent/50"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
          aria-hidden="true"
        />
        <motion.span
          className="absolute inset-0 rounded-full border border-accent/30"
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
          aria-hidden="true"
        />
        <motion.img
          src={jamalPhoto}
          alt={site.name}
          initial={{ opacity: 0, scale: 0.82, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative h-28 w-28 rounded-full object-cover ring-2 ring-line"
        />
      </div>

      {/* Brand name */}
      <motion.div
        className="relative z-10 mt-6 flex items-baseline overflow-hidden pr-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
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
      </motion.div>

      {/* Loading dots */}
      <div className="relative z-10 mt-7 flex items-center gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-accent"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.25, 1],
            }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
          />
        ))}
      </div>

      {/* Welcome message */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.7 }}
        className="relative z-10 mt-6 max-w-xs text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-soft sm:text-xs"
      >
        Welcome in &mdash; let&apos;s create something great
      </motion.p>
    </motion.div>
  )
}