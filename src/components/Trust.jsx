import './Trust.css'

function Trust() {
    const items = [
        { icon: '🤖', text: 'AI-first approach to SEO' },
        { icon: '🌏', text: 'Deep understanding of Malaysian market' },
        { icon: '🏢', text: 'Tailored for SMEs and enterprises' },
        { icon: '💰', text: '100% money-back guarantee' },
        { icon: '🎯', text: 'Results-driven strategy' }
    ]

    // Duplicate items for seamless loop
    const duplicatedItems = [...items, ...items]

    return (
        <section className="section section-light" id="trust">
            <div className="container">
                <h2 className="section-title section-title-dark">Why Businesses Choose CariSEO</h2>
            </div>
            <div className="trust-marquee-wrapper">
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
