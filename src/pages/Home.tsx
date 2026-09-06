import useSeo from '../hooks/useSeo'
import Hero from '../components/home/Hero'
import DesignServices from '../components/home/DesignServices'
import FeaturedProject from '../components/home/FeaturedProject'
import SelectedWork from '../components/home/SelectedWork'
import Philosophy from '../components/home/Philosophy'
import Process from '../components/home/Process'
import AboutPreview from '../components/home/AboutPreview'
import Skills from '../components/home/Skills'
import ContactCTA from '../components/home/ContactCTA'

export default function Home() {
  useSeo({
    title: 'Jamal Haji | Graphic & Creative Designer',
    description:
      'Jamal Haji is a graphic and creative designer who transforms ideas into visually appealing brand identities, graphics and creative experiences.',
  })

  return (
    <>
      <Hero />
      <DesignServices />
      <FeaturedProject />
      <SelectedWork />
      <Philosophy />
      <Process />
      <AboutPreview />
      <Skills />
      <ContactCTA />
    </>
  )
}