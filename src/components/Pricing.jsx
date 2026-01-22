import './Pricing.css'

const STRIPE_LINK = 'https://buy.stripe.com/4gM00j1VS5bogqV2mpcV212'

function Pricing() {
    const features = [
        '1 Website URL',
        'Up to 5 Target Keywords + 5 keywords (promo period ends 31 Jan 2026)',
        '20 English Articles per Month + 100 articles (promo period ends 31 Jan 2026)',
        'Minimum 700 words per article',
        'AI-Assisted SEO Content Deployment at Scale',
        'Programmatic SEO Structure with Internal Linking',
        'Articles Published Directly on Your Website',
        'Full On-Page SEO Optimization',
        'Built for Google and LLM Search Visibility',
        'Advanced Keyword Research',
        'LLM AI Search Optimization',
        'Weekly SEO Ranking Reports',
        'Monthly Keyword Performance Report'
    ]

    const handleSubscribe = () => {
        window.open(STRIPE_LINK, '_blank')
    }

    return (
        <section className="section section-dark" id="pricing" style={{ background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative Shapes */}
            <div className="floating-shapes">
                <div className="shape-cube" style={{ top: '15%', left: '5%' }}></div>
                <div className="shape-cube" style={{ bottom: '20%', right: '8%' }}></div>
                <div className="shape-cube" style={{ top: '60%', left: '85%', width: '60px', height: '60px' }}></div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                <div className="pricing-layout">
                    {/* Left Side - Hook & Text */}
                    <div className="pricing-hook">
                        <span className="pricing-label">Our Pricing</span>
                        <h2 className="pricing-headline">Affordable SEO,<br />Powerful Results.</h2>
                        <p className="pricing-description">
                            Whether you're upgrading your current SEO strategy or just starting out with a limited budget,
                            our plan delivers enterprise-level results at a fraction of the cost.
                        </p>
                        <div className="pricing-contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <a href="mailto:info@cariseo.com">info@cariseo.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon whatsapp-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </span>
                                <a href="https://api.whatsapp.com/send?phone=601137355046&text=Hi%2C%20I'm%20interested%20in%20AI%20SEO.">+60 11-3735 5046</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Single Pricing Card */}
                    <div className="pricing-card-single">
                        <div className="plan-badge">CariSEO Plan</div>
                        <div className="pricing-price">
                            <span className="currency">RM</span>
                            <span className="amount">99</span>
                            <span className="period">/month</span>
                        </div>
                        <p className="pricing-sst">*Price excludes SST</p>
                        <p className="pricing-tagline">Perfect for SMEs & startups ready to dominate search rankings</p>

                        <ul className="pricing-features">
                            {features.map((feature, i) => (
                                <li key={i}>
                                    <span className="icon">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="guarantee-badge">
                            <span className="guarantee-icon">🛡️</span>
                            <span>100% Managed by Our Team<br />No technical skills required</span>
                        </div>

                        <button
                            onClick={handleSubscribe}
                            className="btn btn-primary btn-full"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
