import './Pricing.css'

function Pricing() {
    const scrollToContact = (e) => {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const packages = [
        {
            name: 'Starter Package',
            price: '1,500',
            tagline: 'Best for SMEs starting with AI SEO',
            features: [
                'Login access to content platform',
                '5 SEO-optimized articles',
                'Built for AI SEO visibility',
                'Ready to publish'
            ],
            featured: false
        },
        {
            name: 'Growth Package',
            price: '6,000',
            tagline: 'Best for businesses serious about ranking',
            features: [
                'Login access to content platform',
                '30 SEO-optimized articles',
                'Strong topical authority',
                'Long-term organic growth'
            ],
            featured: true
        }
    ]

    return (
        <section className="section section-dark" id="pricing">
            <div className="container">
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
                                href="#contact"
                                onClick={scrollToContact}
                                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-white'} btn-full`}
                            >
                                👉 Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
