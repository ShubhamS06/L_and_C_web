import './global.css'
import './utility.global.css'
import Navbar from './components/navbar'
import HeroSection from './containers/heroSection'
import DesignSection from './containers/designSection'
import Footer from './components/footer'
import ProjectSection from './containers/projectSection'
import ExperienceSection from './containers/experienceSection'
import ReflectionsSection from './containers/reflectionsSection'
import ArchitectureSection from './containers/architectureSection'
import { useEffect, useState } from 'react'

export default function App() {

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    console.log("rendered");
  })

  useEffect(() => {
    const pageEl = document.getElementById("section-hero")

    if (!pageEl) return;

    const obs = new IntersectionObserver((ens) => {
      if (ens[0].intersectionRatio) {
        setAnimate(true)
        obs.disconnect()
      }
    }, { threshold: [0, 1], root: pageEl, rootMargin: "75px" })

      ;[...pageEl.children].forEach(section => {
        if (section instanceof HTMLElement) {
          obs.observe(section)
        }
      })

    return () => {
      obs.disconnect()
    }
  }, [])

  return (
    <div data-is="page" className="d-contents">
      <Navbar />
      <HeroSection id='section-hero' animate={animate} />
      <DesignSection />
      <ProjectSection />
      <ExperienceSection />
      <ArchitectureSection />
      <ReflectionsSection />
      <Footer />
    </div>
  )
}
