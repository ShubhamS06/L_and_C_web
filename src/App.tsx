import './global.css'
import './utility.global.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import HeroSection from './containers/heroSection'
// import DesignSection from './containers/designSection'
import Footer from './components/footer'
// import ProjectSection from './containers/projectSection'
import ExperienceSection from './containers/experienceSection'
import ReflectionsSection from './containers/reflectionsSection'
import ArchitectureSection from './containers/architectureSection'
import ImagesGridSection from './containers/imagesGridSection'

export default function App() {

  const [visibleSection, setVisibleSection] = useState("")

  useEffect(() => {
    const sectionRootEl = document.getElementById("animated-sections")

    if (!sectionRootEl) return;

    const onIntersection = (ens: IntersectionObserverEntry[]) => {
      console.log(ens);
      ens.forEach(en => {
        console.log(en.intersectionRatio)
        if (en.intersectionRatio == 1) {
          setVisibleSection(en.target.id)
        }
      })
    }

    const obs = new IntersectionObserver(onIntersection, { threshold: [0, 1], root: sectionRootEl, rootMargin: "75px" })

      ;[...sectionRootEl.children].forEach(section => {
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
      <HeroSection />
      <div id="animated-sections" className="d-contents">
        <ImagesGridSection id="section-imagesGrid" animate={visibleSection == "section-imagesGrid"} />
      </div>
      {/* <DesignSection /> */}
      {/* <ProjectSection /> */}
      <ArchitectureSection />
      <ReflectionsSection />
      <ExperienceSection />
      <Footer />
    </div>
  )
}
