import HeroSection from '../containers/home/heroSection'
import DesignSection from '../containers/home/designSection'
import ProjectSection from '../containers/home/projectSection'
import ExperienceSection from '../containers/home/experienceSection'
import ReflectionsSection from '../containers/home/reflectionsSection'
import ArchitectureSection from '../containers/home/architectureSection'

export default function HomePage() {

  return (
    <>
      <HeroSection />
      <DesignSection />
      <ProjectSection />
      <ExperienceSection />
      <ArchitectureSection />
      <ReflectionsSection />
    </>
  )
}
