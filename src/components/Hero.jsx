import './Hero.css'

function Hero() {
    const scrollToConsultation = (e) => {
        e.preventDefault()
        document.getElementById('consultation-section')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            {/* Background Elements */}
            <div className="hero-bg">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape-cube" style={{ top: '20%', left: '10%' }}></div>
                    <div className="shape-cube" style={{ bottom: '30%', right: '15%' }}></div>
                </div>
            </div>

            <div className="container">
                <div className="hero-grid">
                    {/* Left Column - Text Content */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            AI <span className="highlight">SEO</span> That Helps Your Business Get Found and Get Leads
                        </h1>
                        <p className="hero-subtitle">
                            <strong>Rank on AI platform.</strong> Get featured in AI-powered search results.
                            <br />
                            AI SEO content built for SMEs.
                        </p>
                        <div className="hero-cta-wrapper">
                            <a
                                href="#consultation-section"
                                onClick={scrollToConsultation}
                                className="btn btn-primary btn-lg"
                            >
                                👉 Let Us Review Your Website
                            </a>
                        </div>
                        <div className="hero-trust">
                            <div className="trust-badge">
                                <span className="trust-icon">✓</span>
                                <span>Simple. Transparent. Money-Back Guarantee.</span>
                            </div>
                            <p className="trust-sub">Cancel anytime. Full refund. No questions asked.</p>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="hero-visual">
                        <div className="hero-metrics-card">
                            <div className="metrics-status">
                                <span className="status-indicator"></span>
                                <span className="status-text">AI Analysis Running</span>
                            </div>
                            <div className="metrics-display">
                                <div className="metrics-number">+340%</div>
                                <div className="metrics-label">Traffic Increase</div>
                            </div>
                            <div className="metrics-progress">
                                <div className="progress-bar"></div>
                            </div>
                            <div className="metrics-details">
                                <div className="metric-item">
                                    <span className="metric-icon">📈</span>
                                    <span className="metric-text">Rankings Improving</span>
                                </div>
                                <div className="metric-item">
                                    <span className="metric-icon">🎯</span>
                                    <span className="metric-text">12 keywords in top 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
