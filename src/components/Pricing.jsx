import './Pricing.css'

function Pricing() {
    const scrollToContact = (e) => {
        e.preventDefault()
        document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })
    }

    const packages = [
        {
            name: 'Individual',
            price: '2,000',
            tagline: 'For solopreneurs and small teams',
            features: [
                '10 SEO-optimized articles',
                'AI-powered keyword research',
                'Content ready to publish',
                'Email support'
            ],
            featured: false
        },
        {
            name: 'Enterprise',
            price: '7,000',
            tagline: 'For growing businesses ready to scale',
            features: [
                '50 SEO-optimized articles',
                'Advanced keyword strategy',
                'Priority content delivery',
                'Dedicated account manager',
                'Monthly performance report'
            ],
            featured: true
        }
    ]

    return (
        <section className="section section-dark" id="pricing" style={{background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', position: 'relative', overflow: 'hidden'}}>
            {/* Decorative Shapes */}
            <div className="floating-shapes">
                <div className="shape-cube" style={{ top: '15%', left: '5%' }}></div>
                <div className="shape-cube" style={{ bottom: '20%', right: '8%' }}></div>
                <div className="shape-cube" style={{ top: '60%', left: '85%', width: '60px', height: '60px' }}></div>
            </div>
            <div className="container" style={{position: 'relative', zIndex: 5}}>
                <h2 className="section-title section-title-white">Simple, Transparent Pricing</h2>
                <p className="section-subtitle">No hidden fees. No long-term contracts.</p>
                <div className="pricing-grid">
                    {packages.map((pkg, index) => (
                        <div key={index} className={`pricing-card ${pkg.featured ? 'featured' : ''}`}>
                            {pkg.featured && <div className="featured-label">🔥 Most Popular</div>}
                            <h3 className="pricing-name">{pkg.name}</h3>
                            <div className="pricing-price">
                                <span className="currency">RM</span>
                                <span className="amount">{pkg.price}</span>
                            </div>
                            <p className="pricing-tagline">{pkg.tagline}</p>
                            <ul className="pricing-features">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="icon">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="guarantee-badge">
                                <span className="guarantee-icon">🛡️</span>
                                <span>100% Money-Back Guarantee<br />No questions asked</span>
                            </div>
                            <a
                                href="#consultation-section"
                                onClick={scrollToContact}
                                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-white'} btn-full`}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
