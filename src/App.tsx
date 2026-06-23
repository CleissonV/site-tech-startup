import { useScroll, motion } from 'framer-motion'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Partners from './sections/Partners'
import Dashboard from './sections/Dashboard'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-[#03040f]">
      <div className="scan-line" />
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }}
      />
      <Nav />
      <Hero />
      <Features />
      <Partners />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
