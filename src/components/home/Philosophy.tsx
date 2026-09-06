import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { fadeUp, viewportOnce } from '../../lib/motion'

export default function Philosophy() {
  return (
    <section className="py-14 lg:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="eyebrow"
          >
            The Way I Design
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            I don&apos;t just design visuals. I help ideas find their visual identity.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Good design is more than making something look attractive. It is about
            understanding the idea behind a project, finding the right visual language and
            creating something that communicates naturally.
          </motion.p>
        </div>
      </Container>
    </section>
  )
}