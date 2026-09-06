import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { fadeUp, viewportOnce } from '../../lib/motion'

export default function ContactCTA() {
  return (
    <section className="py-14 lg:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-line bg-ink px-6 py-12 text-center sm:px-10 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="relative">
            <p className="eyebrow justify-center text-canvas/70">Got an idea?</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-2xl font-extrabold leading-[1.1] tracking-tight text-canvas sm:text-4xl">
              Have an idea?
              <br />
              Let&apos;s bring it to life.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-canvas/70 sm:text-lg">
              Have a project, brand or creative idea in mind? Let&apos;s talk about how we
              can turn it into something visually meaningful.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" variant="accent">
                Start a Project
              </Button>
              <Button to="/projects" variant="ghost" className="text-canvas hover:text-accent">
                View My Work
              </Button>
            </div>
            <p className="mt-6 text-sm text-canvas/60">
              Prefer to chat?{' '}
              <a
                href="https://wa.me/254729313539"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-canvas underline underline-offset-4 transition-colors hover:text-accent"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" />
                Send a WhatsApp message
              </a>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}