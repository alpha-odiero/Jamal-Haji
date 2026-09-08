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
    title: 'Eugene Mulah | Graphic & Creative Designer',
    description:
      'Eugene Mulah is a graphic and creative designer specializing in brand identity, logo design, graphic design, social media design and creative design solutions. Explore his portfolio of visual work.',
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