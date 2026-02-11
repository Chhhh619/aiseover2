import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collab from './components/Collab'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Clients from './components/Clients'
import Pricing from './components/Pricing'
import WhatYouGet from './components/WhatYouGet'
import WhoIsFor from './components/WhoIsFor'
import Trust from './components/Trust'
import Results from './components/Results'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function HomePage() {
  return (
    <>
      <Hero />
      <Collab />
      <Problem />
      <Solution />
      <Clients />
      <HowItWorks />
      <Pricing />
      <WhatYouGet />
      <WhoIsFor />
      <Trust />
      {/* Results Section */}
      <section className="combined-results-contact" id="results-contact-section">
        {/* Shared Decorative Elements */}
        <div className="glass-shape contact-shape-1"></div>
        <div className="glass-shape contact-shape-2"></div>
        <div className="floating-shapes">
          <div className="shape-cube" style={{ top: '10%', left: '5%' }}></div>
          <div className="shape-cube" style={{ top: '40%', right: '5%', width: '60px', height: '60px' }}></div>
          <div className="shape-cube" style={{ bottom: '20%', left: '8%', width: '50px', height: '50px' }}></div>
          <div className="shape-cube" style={{ bottom: '35%', right: '12%', width: '70px', height: '70px' }}></div>
        </div>
        <Results />
      </section>
      <FAQ />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
