import './global.css'
import './utility.global.css'
import Navbar from './components/navbar'
import HeroSection from './containers/heroSection'
import DesignSection from './containers/designSection'

export default function App() {

  return (
    <div data-is="layout">
      <Navbar />
      <HeroSection />
      <DesignSection />
    </div>
  )
}
