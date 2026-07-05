import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Projects from './components/Projects'
import Process from './components/Process'
import Materials from './components/Materials'
import Coverage from './components/Coverage'
import Warranty from './components/Warranty'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingWhatsapp from './components/FloatingWhatsapp'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Materials />
        <Coverage />
        <Warranty />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}
