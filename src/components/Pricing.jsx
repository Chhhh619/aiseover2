import { useModal } from '../context/ModalContext'
import './Pricing.css'

function Pricing() {
    const { openContactModal } = useModal()

    const handleGetStarted = (e) => {
        e.preventDefault()
        openContactModal()
    }

    const packages = [
        {
            name: 'Individual',
            price: '2,000',
            tagline: 'Best for SMEs starting with AI-powered SEO growth',
            tagline2: 'We help you create and publish articles directly on your website',
            urls: '1 URL',
            features: [
                '1 Website URL',
                '5 Target Keywords',
                '500 AI-generated SEO articles',
                'Articles published on your website by us',
                'Built for AI SEO and Google visibility',
                'Fully optimized and ready to rank'
            ],
            guarantee: 'Guarantee 2 keywords on Google 1st page within 12 months',
            featured: false
        },
        {
            name: 'Enterprise',
            price: '7,000',
            tagline: 'Designed for growing brands managing multiple websites',
            tagline2: 'High-volume AI SEO content with stronger ranking guarantees',
            urls: '4 URLs',
            urlBreakdown: '500 + 500 bonus = 1,000 articles per URL',
            features: [
                '4 Website URLs',
                '5 Target Keywords per URL',
                '500 SEO articles + 500 bonus per URL',
                'Total up to 1,000 articles per URL',
                'Articles published on each website by us',
                'Built for AI SEO dominance',
                'Enterprise-level content scaling'
            ],
            guarantee: 'Guarantee 3 keywords on Google 1st page within 12 months per URL',
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
                                <span className="period">/month</span>
                            </div>
                            <div className="pricing-urls">{pkg.urls}</div>
                            <p className="pricing-tagline">{pkg.tagline}</p>
                            {pkg.tagline2 && (
                                <p className="pricing-tagline2">{pkg.tagline2}</p>
                            )}
                            {pkg.urlBreakdown && (
                                <div className="pricing-breakdown">{pkg.urlBreakdown}</div>
                            )}
                            <ul className="pricing-features">
                                {pkg.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="icon">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {pkg.guarantee && (
                                <div className="pricing-guarantee-highlight">
                                    <span className="guarantee-star">⭐</span>
                                    <span>{pkg.guarantee}</span>
                                </div>
                            )}
                            <div className="guarantee-badge">
                                <span className="guarantee-icon">🛡️</span>
                                <span>100% Money-Back Guarantee<br />No questions asked</span>
                            </div>
                            <button
                                onClick={handleGetStarted}
                                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-white'} btn-full`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
