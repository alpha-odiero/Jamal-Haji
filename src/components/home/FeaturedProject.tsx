import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container'
import DesignImage from '../ui/DesignImage'
import { fadeUp, viewportOnce } from '../../lib/motion'
import { projects } from '../../data/projects'

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured) ?? projects[0]

  if (!featured) return null

  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-soft">
          {/* Header */}
          <div className="grid gap-8 border-b border-line p-8 lg:grid-cols-[1.2fr_1fr] lg:p-12">
            <div>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="eyebrow"
              >
                Featured Project
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
              >
                {featured.title}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-2 font-display text-lg font-semibold text-accent"
              >
                Building a visual identity around creativity.
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col justify-center items-start gap-6"
            >
              <p className="max-w-md text-base leading-relaxed text-ink-soft">
                {featured.description}
              </p>
              <Link
                to={`/projects/${featured.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
              >
                Explore Project
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>

          {/* Large showcase */}
          <div className="grid gap-6 p-8 lg:grid-cols-3 lg:p-12">
            <DesignImage
              src={featured.heroImage}
              alt={`${featured.title} brand identity design by Eugene Mulah`}
              aspect="aspect-[4/3] lg:col-span-2 lg:aspect-[16/9]"
              label="EG"
              gradientFrom="var(--placeholder-1)"
              gradientTo="var(--placeholder-3)"
            />
            <div className="flex flex-col gap-6">
              <DesignImage
                src={featured.gallery[0]}
                alt={`${featured.title} business card design by Eugene Mulah`}
                aspect="aspect-[16/10]"
                label="Business Card"
                gradientFrom="var(--placeholder-3)"
                gradientTo="var(--placeholder-4)"
              />
              <DesignImage
                src={featured.gallery[1]}
                alt={`${featured.title} social media design by Eugene Mulah`}
                aspect="aspect-[16/10]"
                label="Social Media"
                gradientFrom="var(--placeholder-1)"
                gradientTo="var(--placeholder-3)"
              />
            </div>
          </div>

          {/* Palette + link strip */}
          <div className="flex flex-col gap-6 border-t border-line p-8 sm:flex-row sm:items-center sm:justify-between lg:px-12">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {(featured.palette ?? []).map((c) => (
                <div key={c.hex} className="flex items-center gap-2">
                  <span
                    className="h-8 w-8 rounded-full border border-line"
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className="text-xs text-ink-soft">{c.label}</span>
                </div>
              ))}
            </div>
            <Link
              to={`/projects/${featured.slug}`}
              aria-label={`Open ${featured.title} case study`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
