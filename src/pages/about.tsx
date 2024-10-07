import { useEffect, useState } from 'react'
import { debounce } from 'utiljs-pro'
import HeroSection from '../containers/about/heroSection'
import TheArcSection from '../containers/about/theArcSection'
import TheLandsSection from '../containers/about/theLandsSection'
import TheInteriorSection from '../containers/about/theInteriorSection'
import ScrollSection from '../containers/about/scrollSection'
import { isElementVisible } from '../utils/utils'

export default function AboutPage() {

  const [visibleSection, setVisibleSection] = useState<string[]>([])

  const onScrollEnd = debounce(() => {
    const sectionRootEl = document.getElementById("animated-sections")
    if (!sectionRootEl) return;

    setVisibleSection([])
      ;[...sectionRootEl.children].forEach(section => {
        if (section instanceof HTMLElement) {
          if (isElementVisible(section.children[0])) {
            setVisibleSection(s => { s.filter(e => e !== section.id); s.push(section.id); return s })
          }
        }
      })
    // 
  }, 50)

  useEffect(() => {
    document.addEventListener("scrollend", onScrollEnd)

    return () => {
      document.removeEventListener("scrollend", onScrollEnd)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <div id="animated-sections" className="d-contents">
        <ScrollSection id="section-scroll" animate={visibleSection.includes("section-scroll")} />
        <TheArcSection id="section-theArc" animate={visibleSection.includes("section-theArc")} />
        <TheLandsSection id="section-theLands" animate={visibleSection.includes("section-theLands")} />
        <TheInteriorSection id="section-theInterior" animate={visibleSection.includes("section-theInterior")} />
      </div>
    </>
  )
}
