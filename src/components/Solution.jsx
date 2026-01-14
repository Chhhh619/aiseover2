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
        <section className="section section-dark" id="solution">
            <div className="container">
                <div className="solution-grid">
                    <div className="solution-content">
                        <h2 className="section-title section-title-white text-left">What Is AI SEO Content Creation?</h2>
                        <ul className="check-list">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <span className="icon">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <h3 className="result-heading">Result:</h3>
                        <ul className="check-list result-list">
                            {results.map((result, index) => (
                                <li key={index}>
                                    <span className="icon">→</span>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="bold-text-white text-left">
                            This is not generic AI writing.
                            <br />
                            This is AI SEO built for business growth.
                        </p>
                    </div>
                    <div className="solution-visual">
                        <img
                            src="/images/solutions.png"
                            alt="AI SEO workflow - from AI analysis to Google ranking"
                            className="solution-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
