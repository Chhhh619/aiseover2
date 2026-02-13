import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import './Results.css'

function Results() {
    const items = [
        { icon: '📈', text: 'Better Google visibility' },
        { icon: '🎯', text: 'Higher quality traffic' },
        { icon: '💰', text: 'Reduced dependency on paid ads' },
        { icon: '🔄', text: 'Content that keeps working' }
    ]

    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 })
    const { setRef, visibleItems } = useStaggerReveal(items.length)

    return (
        <div className="results-wrapper" id="results">
            <div className="container" style={{position: 'relative', zIndex: 5}}>
                <h2 className={`section-title section-title-white reveal reveal-up ${titleVisible ? 'revealed' : ''}`} ref={titleRef} style={{ fontSize: '2.2rem' }}>With the Right AI SEO Strategy, Businesses Typically See:</h2>
                <div className="results-grid">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`result-card reveal reveal-pop reveal-delay-${index + 1} ${visibleItems.has(index) ? 'revealed' : ''}`}
                            ref={setRef(index)}
                        >
                            <span className="result-icon">{item.icon}</span>
                            <span className="result-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Results
