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

export default function App() {

  return (
    <div data-is="page" className="d-contents">
      <Navbar />
      <HeroSection />
      <DesignSection />
      <ProjectSection />
      <ExperienceSection />
      <ArchitectureSection />
      <ReflectionsSection />
      <Footer />
    </div>
  )
}
