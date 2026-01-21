import { useModal } from '../context/ModalContext'
import './Pricing.css'

function Pricing() {
    const { openContactModal } = useModal()

    const handleGetStarted = (e) => {
        e.preventDefault()
        openContactModal()
    }

    const features = [
        '1 Website URL',
        'Up to 10 Target Keywords',
        '120 English Articles per Month',
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
                                <a href="mailto:hello@cariseo.com">hello@cariseo.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <a href="https://api.whatsapp.com/send?phone=601137355046&text=Hi%2C%20I'm%20interested%20in%20AI%20SEO.">+60 11-3735 5046</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Single Pricing Card */}
                    <div className="pricing-card-single">
                        <div className="plan-badge">Individual Plan</div>
                        <div className="pricing-price">
                            <span className="currency">RM</span>
                            <span className="amount">99</span>
                            <span className="period">/month</span>
                        </div>
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
                            onClick={handleGetStarted}
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
