import './Trust.css'

function Trust() {
    const items = [
        { icon: '🏢', text: 'Built specifically for SMEs' },
        { icon: '🤖', text: 'Strong AI and automation expertise' },
        { icon: '🎯', text: 'SEO strategy first' },
        { icon: '🌏', text: 'Local Malaysia and SEA knowledge' },
        { icon: '💰', text: 'Transparent pricing' }
    ]

    return (
        <section className="section section-light" id="trust">
            <div className="container">
                <h2 className="section-title section-title-dark">Why Businesses Choose Mampu AI</h2>
                <div className="trust-grid">
                    {items.map((item, index) => (
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
