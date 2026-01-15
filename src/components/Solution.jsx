import './Solution.css'

function Solution() {
    const features = [
        'Optimize your content for AI-powered search engines',
        'Get featured in AI summaries and recommendations',
        'Build authority that AI platforms trust',
        'Create content that answers user questions directly'
    ]

    const results = [
        'Appear in ChatGPT, Perplexity, and AI search results',
        'Drive qualified traffic from AI platforms',
        'Future-proof your SEO strategy'
    ]

    return (
        <section className="section section-success" id="solution">
            <div className="container">
                <div className="solution-grid">
                    {/* Left Column - Text */}
                    <div className="solution-content">
                        <h2 className="solution-title">
                            CariSEO helps you get found where your customers are searching
                        </h2>

                        <ul className="solution-features">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <span className="feature-icon">🔹</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

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
                    </div>

                    {/* Right Column - Image */}
                    <div className="solution-visual">
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
        </section>
    )
}

export default Solution
