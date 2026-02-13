import { useScrollReveal } from '../hooks/useScrollReveal'
import './WhoIsFor.css'

function WhoIsFor() {
    const items = [
        'You want inbound leads',
        'You sell services or expertise',
        'You run a SaaS or AI business',
        'Your customers search before buying'
    ]

    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 })
    const { ref: cardRef, isVisible: cardVisible } = useScrollReveal({ threshold: 0.2 })

    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="section section-dark" id="who" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Shapes */}
            <div className="floating-shapes">
                <div className="shape-cube" style={{ top: '20%', right: '10%' }}></div>
                <div className="shape-cube" style={{ bottom: '25%', left: '8%', width: '60px', height: '60px' }}></div>
            </div>
            <div className="container container-narrow" style={{ position: 'relative', zIndex: 5 }}>
                <h2 className={`section-title section-title-white reveal reveal-up ${titleVisible ? 'revealed' : ''}`} ref={titleRef}>AI <span className="seo-highlight">SEO</span> Is Right for You If...</h2>
                <div className={`who-card reveal reveal-pop reveal-delay-2 ${cardVisible ? 'revealed' : ''}`} ref={cardRef}>
                    <ul className="who-list">
                        {items.map((item, index) => (
                            <li key={index}><span className="check-icon">✓</span> {item}</li>
                        ))}
                    </ul>
                    <button
                        onClick={scrollToPricing}
                        className="btn btn-primary who-cta"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    )
}

export default WhoIsFor
