import './Hero.css'

function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault()
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            {/* Video Background - Raw with minimal overlay */}
            <div className="hero-video-container">
                <video
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/hero background.mp4" type="video/mp4" />
                </video>
                <div className="hero-video-overlay"></div>
            </div>

            {/* Main Content - Integrated Biosciences Style */}
            <div className="hero-content-wrapper">
                {/* Large Headline - Top Left */}
                <div className="hero-headline">
                    <h1 className="hero-title">
                        AI SEO That Helps<br />
                        Your Business<br />
                        Get Found.
                    </h1>
                </div>

                {/* Bottom Row - Description Left, CTA Right */}
                <div className="hero-bottom">
                    <p className="hero-description">
                        Rank on Google. Get featured in AI-powered search results.
                        <br />
                        AI SEO content built for Malaysian SMEs.
                    </p>
                    <a href="#contact" onClick={scrollToContact} className="hero-cta">
                        <span className="cta-text">Get a Free Assessment</span>
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
