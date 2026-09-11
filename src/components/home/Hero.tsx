import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import DesignImage from '../ui/DesignImage'
import eugineImage from '../../assets/eugine.jpeg'
import mulaImage from '../../assets/mula.jpeg'
import johnImage from '../../assets/john.jpeg'

const heroImages = [
  { src: eugineImage, alt: 'Portrait of Eugene John Mulah' },
  { src: mulaImage, alt: 'Creative design work by Eugene John Mulah' },
  { src: johnImage, alt: 'Eugene John Mulah designer portrait' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-32">
      <Container>
        <div className="grid items-center gap-10 pb-12 lg:grid-cols-2 lg:gap-10 lg:pb-24">
          {/* Left: copy */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-xl">
            <motion.p variants={fadeUp} className="eyebrow">
              Creative Designer
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[4rem]"
            >
              I turn ideas into visuals that people remember.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              I&apos;m Eugene John Mulah, a graphic and creative designer focused on transforming
              ideas into visual experiences that communicate, connect and leave an
              impression.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/projects">View My Work</Button>
              <Button to="/contact" variant="outline">
                Let&apos;s Work Together
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: hero visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function HeroVisual() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      {/* Background card deck */}
      <div className="absolute -left-2 top-10 hidden h-40 w-40 -rotate-6 rounded-2xl bg-[var(--hero-backdrop-a)] sm:block" />
      <div className="absolute -right-2 bottom-8 hidden h-40 w-40 rotate-6 rounded-2xl bg-[var(--hero-backdrop-b)] sm:block" />

      <div className="relative overflow-hidden rounded-3xl border border-line shadow-lift">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <DesignImage
              src={heroImages[index].src}
              alt={heroImages[index].alt}
              aspect="aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink/30 hover:bg-ink/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}