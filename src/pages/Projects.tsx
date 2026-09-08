import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import useSeo from '../hooks/useSeo'
import Container from '../components/ui/Container'
import ProjectFilter from '../components/projects/ProjectFilter'
import ProjectGrid from '../components/projects/ProjectGrid'
import { projects, projectFilters } from '../data/projects'
import { fadeUp, stagger } from '../lib/motion'

const filters = projectFilters as readonly string[]

export default function Projects() {
  useSeo({
    title: 'Graphic Design Portfolio | Eugene Mulah',
    description:
      'Explore the portfolio of Eugene Mulah — branding, logo design, graphic design, social media, creative design and marketing projects developed across different ideas, styles and visual directions.',
  })

  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category')
  const [activeFilter, setActiveFilter] = useState<string>('All')

  // Keep the active filter in sync with ?category= in the URL,
  // so Explore links from the home page land on the right section.
  useEffect(() => {
    if (urlCategory && filters.includes(urlCategory)) {
      setActiveFilter(urlCategory)
    } else if (!urlCategory) {
      setActiveFilter('All')
    }
  }, [urlCategory])

  const handleFilterChange = useCallback(
    (filter: string) => {
      setActiveFilter(filter)
      setSearchParams(filter === 'All' ? {} : { category: filter }, { replace: true })
    },
    [setSearchParams]
  )

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return (
    <>
      {/* Header */}
      <section className="pt-24 lg:pt-40">
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p variants={fadeUp} className="eyebrow">
              Portfolio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl"
            >
              Selected work.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              A collection of branding, graphic design and creative projects developed
              through different ideas, styles and visual directions.
            </motion.p>
          </motion.div>

          <div className="mt-10 border-b border-line pb-6">
            <ProjectFilter
              filters={projectFilters}
              active={activeFilter}
              onChange={handleFilterChange}
            />
          </div>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <Container>
          <h2 className="sr-only">Projects</h2>
          <ProjectGrid key={activeFilter} projects={filtered} />
        </Container>
      </section>
    </>
  )
}