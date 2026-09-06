import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../../lib/motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import DesignImage from '../ui/DesignImage'
import heroImage from '../../assets/hero.png'

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
              I&apos;m Jamal Haji, a graphic and creative designer focused on transforming
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
  return (
    <div className="relative">
      {/* Background card deck */}
      <div className="absolute -left-2 top-10 hidden h-40 w-40 -rotate-6 rounded-2xl bg-[#d9d0bd] sm:block" />
      <div className="absolute -right-2 bottom-8 hidden h-40 w-40 rotate-6 rounded-2xl bg-[#e9e2d4] sm:block" />

      <div className="relative overflow-hidden rounded-3xl border border-line shadow-lift">
        <DesignImage
          src={heroImage}
          alt="Jamal Graphex — creative design work by Jamal Haji"
          aspect="aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
          priority
        />
      </div>
    </div>
  )
}