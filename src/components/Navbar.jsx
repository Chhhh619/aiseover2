import { useState, useEffect } from 'react'
import { useModal } from '../context/ModalContext'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { openContactModal } = useModal()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    const handleGetStarted = (e) => {
        e.preventDefault()
        openContactModal()
    }

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <a href="#" className="navbar-logo" onClick={(e) => scrollToSection(e, 'hero')}>
                        <img
                            src={scrolled ? "/images/cariSeo_background.png" : "/images/cariSeo_text.png"}
                            alt="CariSEO by Mampu AI"
                            className="logo-image"
                        />
                    </a>

                    <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')}>Home</a>
                        <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')}>How It Works</a>
                        <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>Pricing</a>
                        <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>FAQ</a>
                        <a
                            href="https://app.cariseo.com/"
                            className="mobile-login-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
                        </a>
                        <button
                            onClick={(e) => {
                                handleGetStarted(e)
                                setMobileMenuOpen(false)
                            }}
                            className="btn btn-primary mobile-cta"
                        >
                            Get Started
                        </button>
                    </div>

                    <div className="navbar-actions">
                        <a
                            href="https://app.cariseo.com/"
                            className="btn btn-outline desktop-only"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Login
                        </a>
                        <button
                            onClick={handleGetStarted}
                            className="btn btn-primary desktop-only"
                        >
                            Get Started
                        </button>
                        <button
                            className={`navbar-toggle ${mobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
