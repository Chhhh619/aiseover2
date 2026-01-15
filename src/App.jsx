import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import WhatYouGet from './components/WhatYouGet'
import WhoIsFor from './components/WhoIsFor'
import Trust from './components/Trust'
import Results from './components/Results'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Pricing />
        <WhatYouGet />
        <WhoIsFor />
        <Trust />
        {/* Combined Results & Contact Section */}
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
          <ContactForm />
        </section>
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
