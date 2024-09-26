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
import ScrollSection from './containers/scrollSection'
import { debounce } from 'utiljs-pro'

export default function App() {

  const [visibleSection, setVisibleSection] = useState<string[]>([])

  useEffect(() => {
    const sectionRootEl = document.getElementById("animated-sections")

    if (!sectionRootEl) return;

    const onIntersection = /* debounce */((ens: IntersectionObserverEntry[]) => {
      console.log(ens.map(e => e.target!.id + e.intersectionRatio));
      // setVisibleSection([])
      ens.forEach(en => {
        if (en.intersectionRatio === 0) {
          setVisibleSection(s => { s.filter(e => e !== en.target!.id); return s })
        } else {
          setVisibleSection(s => { s.filter(e => e !== en.target!.id); s.push(en.target!.id); return s })
        }
      })
    }/* , 50 */)

    const obs = new IntersectionObserver(onIntersection, { threshold: [0, 1] })

      ;[...sectionRootEl.children].forEach(section => {
        if (section instanceof HTMLElement) {
          obs.observe(section as HTMLElement)
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
        <ScrollSection id="section-scroll" animate={visibleSection.includes("section-scroll")} />
        <TheArcSection id="section-theArc" animate={visibleSection.includes("section-theArc")} />
        <TheLandsSection id="section-theLands" animate={visibleSection.includes("section-theLands")} />
        <TheInteriorSection id="section-theInterior" animate={visibleSection.includes("section-theInterior")} />
        <ImagesGridSection id="section-imagesGrid" animate={visibleSection.includes("section-imagesGrid")} />
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
