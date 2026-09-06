import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import DesignImage from '../ui/DesignImage'
import SectionHeading from '../ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../../lib/motion'
import creative from '../../assets/creative.jpg'

export default function AboutPreview() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Visual composition */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-accent/10 sm:block" />
            <DesignImage
              src={creative}
              alt="Creative design work by Jamal Haji"
              aspect="aspect-[4/5]"
            />
          </motion.div>

          {/* Copy */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 lg:order-2">
            <motion.div variants={fadeUp}>
              <SectionHeading eyebrow="The Designer" title="Behind the designs." />
            </motion.div>
            <motion.div variants={fadeUp} className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                I&apos;m Jamal Haji, a graphic and creative designer passionate about
                turning ideas into visual experiences.
              </p>
              <p>
                I enjoy exploring how typography, color, composition and visual
                storytelling can transform a simple concept into something people connect
                with.
              </p>
              <p>
                Whether it&apos;s a brand identity, poster, social media design or a
                completely new creative direction, I approach every project with curiosity,
                attention to detail and a desire to create something meaningful.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6">
              <Button to="/about" variant="outline">
                More About Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}