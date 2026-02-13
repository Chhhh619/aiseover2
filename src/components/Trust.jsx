import { useScrollReveal } from '../hooks/useScrollReveal'
import './Trust.css'

function Trust() {
    const items = [
        { icon: '🤖', text: 'AI-first approach to SEO' },
        { icon: '🌏', text: 'Deep understanding of Malaysian market' },
        { icon: '🎯', text: 'Results-driven strategy' },
        { icon: '💰', text: 'Cost-Effective for SMEs' },
        { icon: '🔑', text: 'Additional Keyword Coverage' },
        { icon: '📈', text: 'Consistent, Scalable Output' }
    ]

    // Duplicate items multiple times for seamless infinite loop
    const duplicatedItems = [...items, ...items, ...items, ...items]

    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 })
    const { ref: marqueeRef, isVisible: marqueeVisible } = useScrollReveal({ threshold: 0.1 })

    return (
        <section className="section section-light" id="trust">
            <div className="container">
                <h2 className={`section-title section-title-dark reveal reveal-up ${titleVisible ? 'revealed' : ''}`} ref={titleRef}>Why Businesses Choose Cari<span className="seo-highlight">SEO</span></h2>
            </div>
            <div className={`trust-marquee-wrapper reveal reveal-fade ${marqueeVisible ? 'revealed' : ''}`} ref={marqueeRef}>
                <div className="trust-marquee">
                    {duplicatedItems.map((item, index) => (
                        <div key={index} className="trust-item">
                            <span className="trust-icon">{item.icon}</span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Trust
