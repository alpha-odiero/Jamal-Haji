import { motion } from 'framer-motion'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../data/services'
import { site } from '../lib/site'
import { serviceVisuals } from '../lib/serviceVisuals'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.description,
      serviceType: service.title,
      offers: {
        '@type': 'Offer',
        provider: {
          '@type': 'ProfessionalService',
          name: site.studio,
          url: site.url,
        },
      },
    },
  })),
}

export default function Services() {
  useSeo({
    title: 'Graphic Design Services | Eugene Mulah',
    description:
      'Brand identity, logo design, graphic design, social media design, marketing materials and creative design services by Eugene Mulah — tailored to your idea and audience.',
    schema: serviceSchema,
  })

  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-40">
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow">
              Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl"
            >
              Design services built around your idea.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              Whether you&apos;re building a brand from scratch or need a visual piece for an
              existing business, I create design solutions tailored to the idea and the
              audience.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Services list */}
      <section className="py-12 lg:py-24">
        <Container>
          <h2 className="sr-only">Design Services</h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, i) => {
              const visual = serviceVisuals[i % serviceVisuals.length]
              return (
                <motion.div key={service.id} variants={fadeUp}>
                  <ServiceCard
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    icon={visual.icon}
                    iconChipClass={visual.chipClass}
                    iconColorClass={visual.iconClass}
                    deliverables={service.deliverables}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 lg:pb-24">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-line bg-canvas-alt px-6 py-12 text-center sm:px-10 lg:py-16"
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              Let&apos;s talk about your idea and how we can turn it into something visually
              meaningful.
            </p>
            <div className="mt-6 flex justify-center">
              <Button to="/contact">Let&apos;s Work Together</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}