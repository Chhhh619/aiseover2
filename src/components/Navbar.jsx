import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Change logo and style when scrolled past hero section
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToContact = (e) => {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo Pill - swaps between text and background versions */}
                <a href="#" className="nav-pill logo-pill">
                    <img
                        src={scrolled ? "/images/cariSeo_background.png" : "/images/cariSeo_text.png"}
                        alt="CariSEO by Mampu AI"
                        className="logo-img"
                    />
                </a>

                {/* CTA Pill */}
                <a href="#contact" onClick={scrollToContact} className="nav-pill cta-pill">
                    Get Started
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`hamburger hide-desktop ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#contact" onClick={scrollToContact} className="btn btn-primary btn-full">
                        Get Started
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
