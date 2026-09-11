import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { fadeUp, stagger } from '../lib/motion'

export default function NotFound() {
  useSeo({
    title: 'Page Not Found | Eugene John Mulah',
    description: 'The page you are looking for does not exist or has been moved.',
    noindex: true,
  })

  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow justify-center">
            404
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl"
          >
            Looks like this page went off the canvas.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-soft">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/">Back to Home</Button>
            <a
              href="mailto:genejones426@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-accent"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Send a message
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}