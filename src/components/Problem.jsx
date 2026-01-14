import './Problem.css'

function Problem() {
    const problems = [
        'Google does not rank it',
        'Website traffic stays low',
        "Not built for Google's AI-powered search"
    ]

    return (
        <section className="section section-light" id="problem">
            <div className="container container-narrow">
                <h2 className="section-title section-title-dark">Why Most Business Content Does Not Work</h2>
                <div className="problem-card">
                    <ul className="problem-list">
                        {problems.map((problem, index) => (
                            <li key={index}>
                                <span className="icon">✕</span>
                                <span>{problem}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="bold-text">
                        The issue is not effort.
                        <br />
                        The issue is content without SEO strategy.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Problem
