import './Results.css'

function Results() {
    const items = [
        { icon: '📈', text: 'Better Google visibility' },
        { icon: '🎯', text: 'Higher quality traffic' },
        { icon: '💰', text: 'Reduced dependency on paid ads' },
        { icon: '🔄', text: 'Content that keeps working' }
    ]

    return (
        <div className="results-wrapper" id="results">
            <div className="container" style={{position: 'relative', zIndex: 5}}>
                <h2 className="section-title section-title-white" style={{ fontSize: '2.2rem' }}>With the Right AI SEO Strategy, Businesses Typically See:</h2>
                <div className="results-grid">
                    {items.map((item, index) => (
                        <div key={index} className="result-card">
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
