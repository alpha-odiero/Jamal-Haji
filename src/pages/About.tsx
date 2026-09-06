import { motion } from 'framer-motion'
import { Lightbulb, MessageSquare, Search, Compass } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Skills from '../components/home/Skills'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const values: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Creativity',
    description: 'Exploring ideas instead of settling for the obvious.',
    icon: Lightbulb,
  },
  {
    title: 'Clarity',
    description: 'Design should communicate before it tries to impress.',
    icon: MessageSquare,
  },
  {
    title: 'Detail',
    description: 'Small details often make the biggest difference.',
    icon: Search,
  },
  {
    title: 'Purpose',
    description: 'Every visual decision should have a reason behind it.',
    icon: Compass,
  },
]

export default function About() {
  useSeo({
    title: 'Jamal Haji | About the Designer',
    description:
      'Learn about Jamal Haji, a graphic and creative designer who turns ideas into visuals that communicate clearly and leave an impression.',
  })

  return (
    <>
      {/* 01 — Hero */}
      <section className="pt-24 lg:pt-40">
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow">
              About Jamal
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl"
            >
              A designer driven by ideas and visual expression.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              I&apos;m Jamal Haji, a graphic and creative designer who enjoys turning ideas
              into visuals that communicate clearly and leave an impression.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* 02 — Personal story */}
      <section className="py-12 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading title="Design is how I turn ideas into something people can see." />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              <motion.p variants={fadeUp}>
                I believe every idea has a visual story waiting to be told.
              </motion.p>
              <motion.p variants={fadeUp}>
                My approach to design starts with understanding what a project is trying to
                say. From there, I explore visual directions that can give the idea
                personality, clarity and impact.
              </motion.p>
              <motion.p variants={fadeUp}>
                I enjoy the process of taking something that exists only as an idea and
                gradually turning it into something tangible — whether that is a logo,
                identity, poster, social media visual or complete creative direction.
              </motion.p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 03 — Values */}
      <section className="py-12 lg:py-24">
        <Container>
          <SectionHeading eyebrow="What I Value" title="A few principles I design by." />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                variants={fadeUp}
                className="group rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="text-xs font-semibold tracking-widest text-ink-faint">
                  0{i + 1}
                </span>
                <value.icon className="mt-5 h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-ink">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 04 — Philosophy */}
      <section className="bg-canvas-alt py-14 lg:py-28">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="eyebrow justify-center">Philosophy</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Good design isn&apos;t just what you see. It&apos;s what you understand and
              remember.
            </h2>
          </motion.div>
        </Container>
      </section>

      {/* 05 — Skills */}
      <Skills />

      {/* 06 — CTA */}
      <section className="py-12 lg:py-20">
        <Container>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-line bg-card px-6 py-12 text-center sm:px-10 lg:py-16"
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Let&apos;s create something meaningful.
            </h2>
            <div className="mt-6 flex justify-center">
              <Button to="/contact">Start a Project</Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}