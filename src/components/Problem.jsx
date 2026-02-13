import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Problem.css'

function Problem() {
    const problems = [
        {
            icon: '✕',
            text: 'Search behavior has changed. Users now get answers from AI summaries'
        },
        {
            icon: '✕',
            text: 'Google rankings do not guarantee clicks anymore. Visibility does not always translate into traffic'
        },
        {
            icon: '✕',
            text: 'Customers expect instant answers, not just links to browse'
        }
    ]

    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 })
    const { setRef, visibleItems } = useStaggerReveal(problems.length)
    const { ref: closingRef, isVisible: closingVisible } = useScrollReveal({ threshold: 0.3 })

    return (
        <section className="section section-problem" id="problem">
            <div className="container container-narrow">
                <h2 className={`section-title reveal reveal-up ${titleVisible ? 'revealed' : ''}`} ref={titleRef}>
                    Why ranking on Google alone is no longer enough
                </h2>

                <ul className="problem-list">
                    {problems.map((problem, index) => (
                        <li
                            key={index}
                            className={`problem-item reveal reveal-left reveal-delay-${index + 1} ${visibleItems.has(index) ? 'revealed' : ''}`}
                            ref={setRef(index)}
                        >
                            <span className="problem-icon">{problem.icon}</span>
                            <span>{problem.text}</span>
                        </li>
                    ))}
                </ul>

                <div className={`problem-closing reveal reveal-up reveal-delay-4 ${closingVisible ? 'revealed' : ''}`} ref={closingRef}>
                    <p>The issue is <strong>not</strong> effort.</p>
                    <p>The issue is content <strong>without SEO strategy</strong>.</p>
                </div>
            </div>
        </section>
    )
}

export default Problem
