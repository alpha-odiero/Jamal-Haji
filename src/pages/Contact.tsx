import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import ContactForm from '../components/ui/ContactForm'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import { site } from '../lib/site'
import { fadeUp, stagger } from '../lib/motion'

export default function Contact() {
  useSeo({
    title: 'Jamal Haji | Let\'s Work Together',
    description:
      'Get in touch with Jamal Haji to start a brand, design or creative project. Tell me what you have in mind and let\'s take it from there.',
  })

  return (
    <>
      <section className="pt-24 lg:pt-40">
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow">
              Let&apos;s Talk
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl"
            >
              Have an idea?
              <br className="hidden sm:block" /> Let&apos;s make it visual.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Tell me what you&apos;re working on, what you have in mind, or simply where
              you&apos;d like to start. I&apos;ll get back to you and we can take it from
              there.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            {/* Contact details */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" className="space-y-5">
              <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-card p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  <Phone className="h-4 w-4" aria-hidden="true" /> Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-lg font-semibold text-ink transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-card p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email
                </p>
                <a
                  href={site.emailHref}
                  className="mt-2 block break-all text-lg font-semibold text-ink transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-card p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-500" /> WhatsApp
                </p>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-emerald-600 transition-colors hover:text-ink"
                >
                  {site.whatsappLabel}
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <p className="mt-1 text-sm text-ink-soft">
                  Fastest way to enquire about a project or start something new.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  Availability
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Open to new projects, brand work and creative ideas. Send a message and
                  I&apos;ll respond as soon as I can.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="rounded-3xl border border-line bg-card p-5 shadow-soft sm:p-8">
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}