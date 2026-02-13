import { useScrollReveal } from '../hooks/useScrollReveal'
import './Solution.css'

function Solution() {
    const results = [
        'Appear in ChatGPT, Perplexity, and AI search results',
        'Drive qualified traffic from AI platforms',
        'Future-proof your SEO strategy'
    ]

    const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.2 })
    const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.2 })

    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="section section-success" id="solution">
            <div className="container">
                <div className="solution-grid">
                    {/* Left Column - Text */}
                    <div className={`solution-content reveal reveal-left ${leftVisible ? 'revealed' : ''}`} ref={leftRef}>
                        <h2 className="solution-title">
                            Cari<span className="seo-highlight">SEO</span> helps you get found where your customers are searching
                        </h2>

                        <div className="solution-results">
                            <h3>What You Get:</h3>
                            <ul>
                                {results.map((result, index) => (
                                    <li key={index}>
                                        <span className="result-icon">✓</span>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="solution-closing">
                            This is <strong>not</strong> traditional SEO.<br />
                            This is <strong>AI SEO for the future of search</strong>.
                        </p>

                        <button
                            onClick={scrollToPricing}
                            className="btn btn-primary solution-cta"
                        >
                            Get Started Today
                        </button>
                    </div>

                    {/* Right Column - Enhanced Image Display */}
                    <div className={`solution-visual reveal reveal-right ${rightVisible ? 'revealed' : ''}`} ref={rightRef}>
                        <div className="solution-image-container">
                            {/* Decorative elements */}
                            <div className="image-glow"></div>
                            <div className="image-ring image-ring-1"></div>
                            <div className="image-ring image-ring-2"></div>
                            <div className="floating-badge badge-top">
                                <span className="badge-icon">🤖</span>
                                <span>AI-Powered</span>
                            </div>
                            <div className="floating-badge badge-bottom">
                                <span className="badge-icon">📈</span>
                                <span>+340% Traffic</span>
                            </div>
                            <div className="solution-image-wrapper">
                                <img
                                    src="/images/solutions.png"
                                    alt="AI SEO content creation process"
                                    className="solution-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
