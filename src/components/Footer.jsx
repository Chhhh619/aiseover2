import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const sloganRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.3 }
        )

        if (sloganRef.current) {
            observer.observe(sloganRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <footer className="footer">
            {/* Flowing Slogan - Ogaki Digital style */}
            <div className="footer-slogan" ref={sloganRef}>
                <h2 className="slogan-text">
                    Rank Up, with Cari<span className="seo-highlight">SEO.</span>
                </h2>
            </div>

            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <img src="/images/cariSeo_text.png" alt="CariSEO by Mampu AI" className="footer-logo-img" />
                        </a>
                        <p className="footer-location">Kuala Lumpur, Malaysia</p>
                    </div>
                    <div className="footer-links">
                        <Link to="/terms">Terms & Conditions</Link>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 CariSEO by Mampu AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
