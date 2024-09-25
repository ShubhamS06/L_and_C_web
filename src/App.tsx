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
import TheArcSection from './containers/theArcSection'
import TheLandsSection from './containers/theLandsSection'
import TheInteriorSection from './containers/theInteriorSection'

export default function App() {

  const [visibleSection, setVisibleSection] = useState("")

  useEffect(() => {
    const sectionRootEl = document.getElementById("animated-sections")

    if (!sectionRootEl) return;

    const onIntersection = (ens: IntersectionObserverEntry[]) => {
      console.log(ens.map(e => e.target.id + e.intersectionRatio));
      ens.forEach(en => {
        if (en.intersectionRatio > 0.5) {
          setVisibleSection(en.target.id)
        }
      })
    }

    const obs = new IntersectionObserver(onIntersection, { threshold: [0, 1] })

      ;[...sectionRootEl.children].forEach(section => {
        if (section instanceof HTMLElement) {
          obs.observe(section)
        }
      })

    return () => {
      // obs.disconnect()
    }
  }, [])

  return (
    <div data-is="page" className="d-contents">
      <Navbar />
      <HeroSection />
      <div id="animated-sections" className="d-contents">
        <TheArcSection id="section-theArc" animate={visibleSection == "section-theArc"} />
        <TheLandsSection id="section-theLands" animate={visibleSection == "section-theLands"} />
        <TheInteriorSection id="section-theInterior" animate={visibleSection == "section-theInterior"} />
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
