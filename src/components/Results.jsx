import './Results.css'

function Results() {
    const items = [
        { icon: '📈', text: 'Better Google visibility' },
        { icon: '🎯', text: 'Higher quality traffic' },
        { icon: '💰', text: 'Reduced dependency on paid ads' },
        { icon: '🔄', text: 'Content that keeps working' }
    ]

    return (
        <section className="section section-dark" id="results" style={{position: 'relative', overflow: 'hidden'}}>
            {/* Decorative Shapes */}
            <div className="floating-shapes">
                <div className="shape-cube" style={{ top: '15%', left: '5%' }}></div>
                <div className="shape-cube" style={{ bottom: '15%', right: '5%', width: '60px', height: '60px' }}></div>
                <div className="shape-cube" style={{ top: '50%', right: '12%', width: '50px', height: '50px' }}></div>
            </div>
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
        </section >
    )
}

export default Results
