import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import DesignImage from '../components/ui/DesignImage'
import ProjectGallery from '../components/projects/ProjectGallery'
import { projects } from '../data/projects'
import { site, SEO } from '../lib/site'
import { fadeUp, stagger } from '../lib/motion'

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  const projectSchema = project
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
              { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${site.url}/projects` },
              {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: `${site.url}/projects/${project.slug}`,
              },
            ],
          },
          {
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            genre: project.category,
            url: `${site.url}/projects/${project.slug}`,
            inLanguage: 'en',
            creator: {
              '@type': 'Person',
              name: SEO.personName,
              jobTitle: SEO.jobTitle,
              url: site.url,
            },
          },
        ],
      }
    : undefined

  useSeo({
    title: project
      ? `${project.title} — Portfolio Project | Eugene John Mulah`
      : 'Project Not Found | Eugene John Mulah',
    description: project
      ? `${project.description} — a ${project.category.toLowerCase()} project by Eugene John Mulah, ${project.role}.`
      : 'The project you are looking for does not exist or has moved.',
    schema: projectSchema,
  })

  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center pt-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="eyebrow justify-center">Project</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              This project went off the canvas.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              The project you&apos;re looking for doesn&apos;t exist or may have been
              moved. Explore the rest of the selected work instead.
            </p>
            <Link
              to="/projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to Projects
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      {/* 01 — Project hero */}
      <section className="pt-24 lg:pt-32">
        <Container>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to projects
          </Link>

          <motion.div variants={stagger} initial="hidden" animate="visible" className="mt-8 max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow">
              {project.category}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl"
            >
              {project.title}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
              {project.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 overflow-hidden rounded-3xl border border-line bg-card shadow-soft"
          >
            <DesignImage
              src={project.heroImage}
              alt={`${project.title} — ${project.category} project visual by Eugene John Mulah`}
              aspect="aspect-[16/9]"
              priority
              label={project.title}
              gradientFrom="#faf8f4"
              gradientTo="#e0d6c3"
            />
          </motion.div>

          {/* Metadata */}
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Category
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">{project.category}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Year
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Role
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Tools
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-ink">
                {project.tools.join(' · ')}
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* 02 — Overview */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              The idea.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {project.overview}
            </p>
          </div>
        </Container>
      </section>

      {/* 03 — Creative direction */}
      <section className="bg-canvas-alt py-12 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            The creative direction.
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="eyebrow">Concept</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.concept}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Visual Direction</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.visualDirection}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Brand Personality</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.personality}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="eyebrow">Typography</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.typography}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Color</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.color}
                </p>
              </div>
              <div>
                <h3 className="eyebrow">Composition</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {project.composition}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 04/05 — Visual identity + Applications */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                The visual identity.
              </h2>
              <div className="mt-8 space-y-6">
                <DesignImage
                  src={null}
                  alt={`${project.title} logo on light background`}
                  aspect="aspect-[4/3]"
                  label="Primary Logo"
                  gradientFrom="#faf8f4"
                  gradientTo="#ede4d3"
                />
                <DesignImage
                  src={null}
                  alt={`${project.title} logo on dark background`}
                  aspect="aspect-[4/3]"
                  label="Logo on Dark"
                  gradientFrom="#1a1713"
                  gradientTo="#2c2620"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                The applications.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                The identity comes alive across the brand&apos;s applications — built to
                stay consistent while adapting to each surface.
              </p>
              <ul className="mt-8 space-y-3">
                {(project.applications ?? []).map((app) => (
                  <li
                    key={app}
                    className="flex items-center gap-3 rounded-xl border border-line bg-card px-5 py-4 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Color palette */}
          {project.palette && project.palette.length > 0 && (
            <div className="mt-16">
              <h3 className="eyebrow">Color Palette</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.palette.map((c) => (
                  <div
                    key={c.hex}
                    className="overflow-hidden rounded-2xl border border-line bg-card"
                  >
                    <div className="h-28 w-full" style={{ backgroundColor: c.hex }} />
                    <div className="px-5 py-4">
                      <p className="text-sm font-semibold text-ink">{c.label}</p>
                      <p className="mt-0.5 font-mono text-xs uppercase text-ink-faint">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      {/* 06 — Final gallery */}
      <section className="py-12 lg:py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            The final result.
          </h2>
          <ProjectGallery
            images={project.gallery}
            title={project.title}
            className="mt-10"
          />
        </Container>
      </section>

      {/* 07 — Next project */}
      <section className="pb-14 lg:pb-20">
        <Container>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-4 rounded-3xl border border-line bg-card px-8 py-12 transition-colors duration-300 hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between lg:px-12"
          >
            <div>
              <p className="eyebrow">Explore more work</p>
              <span className="mt-4 block font-display text-3xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-4xl">
                {nextProject.title}
                <ArrowRight
                  className="ml-3 inline h-6 w-6 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </div>
            <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </section>
    </>
  )
}