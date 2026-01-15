import './Problem.css'

function Problem() {
    const problems = [
        {
            icon: '✕',
            text: 'Google does not rank it'
        },
        {
            icon: '✕',
            text: 'Website traffic stays low'
        },
        {
            icon: '✕',
            text: "Not built for Google's AI-powered search"
        }
    ]

    return (
        <section className="section section-problem" id="problem">
            <div className="container container-narrow">
                <h2 className="section-title section-title-dark">
                    Why Most Business Content Does Not Work
                </h2>

                <ul className="problem-list">
                    {problems.map((problem, index) => (
                        <li key={index} className="problem-item">
                            <span className="problem-icon">{problem.icon}</span>
                            <span>{problem.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="problem-closing">
                    <p>The issue is <strong>not</strong> effort.</p>
                    <p>The issue is content <strong>without SEO strategy</strong>.</p>
                </div>
            </div>
        </section>
    )
}

export default Problem
