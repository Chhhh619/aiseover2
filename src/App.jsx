import { useState, useEffect } from 'react'
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
        <Results />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
