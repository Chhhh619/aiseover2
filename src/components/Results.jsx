import './Results.css'

function Results() {
    const items = [
        { icon: '📈', text: 'Better Google visibility' },
        { icon: '🎯', text: 'Higher quality traffic' },
        { icon: '💰', text: 'Reduced dependency on paid ads' },
        { icon: '🔄', text: 'Content that keeps working' }
    ]

    return (
        <section className="section section-dark" id="results">
            <div className="container">
                <h2 className="section-title section-title-white">With the Right AI SEO Strategy, Businesses Typically See:</h2>
                <div className="results-grid">
                    {items.map((item, index) => (
                        <div key={index} className="result-card">
                            <span className="result-icon">{item.icon}</span>
                            <span className="result-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Results
