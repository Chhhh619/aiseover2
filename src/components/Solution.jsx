import './Solution.css'

function Solution() {
    const features = [
        'AI-powered keyword research',
        'Real search intent analysis',
        'SEO-structured content',
        'Human business understanding'
    ]

    const results = [
        'Matches what customers are searching for',
        'Ranks higher on Google',
        'Built for AI-powered search visibility'
    ]

    return (
        <section className="section section-success" id="solution">
            <div className="container">
                <div className="solution-grid">
                    {/* Left Column - Text */}
                    <div className="solution-content">
                        <h2 className="solution-title">
                            What Is AI <span className="highlight-blue">SEO</span> Content Creation?
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
                            This is <strong>not</strong> generic AI writing.<br />
                            This is <strong>AI SEO built for business growth</strong>.
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
