import { useState, useCallback } from 'react'
import { useLenis } from './hooks/useLenis'
import { useRevealOnScroll } from './hooks/useGsap'
import CustomCursor from './components/CustomCursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Portfolio from './sections/Portfolio'
import Process from './sections/Process'
import Location from './sections/Location'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useLenis()
  useRevealOnScroll('.reveal-up')
  useRevealOnScroll('.reveal-left')
  useRevealOnScroll('.reveal-right')
  useRevealOnScroll('.reveal-scale')

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}
      <CustomCursor />
      <a href="#main-content" className="skip-nav">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <Hero loaded={loaded} />
        <About />
        <Portfolio />
        <Process />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
