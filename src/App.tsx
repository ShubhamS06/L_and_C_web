import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function App() {

  return (
    <>
      <Navbar />
      <div data-is="page" className="d-contents">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
