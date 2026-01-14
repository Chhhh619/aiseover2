import './WhatYouGet.css'

function WhatYouGet() {
    const items = [
        { icon: '📄', text: 'SEO-optimized articles' },
        { icon: '🤖', text: 'Content built for AI-powered search' },
        { icon: '🎯', text: 'Clear lead-focused structure' },
        { icon: '📈', text: 'Long-term organic assets' }
    ]

    return (
        <section className="section section-light" id="whatyouget">
            <div className="container">
                <h2 className="section-title section-title-dark">Everything You Need for AI SEO</h2>
                <div className="features-grid">
                    {items.map((item, index) => (
                        <div key={index} className="feature-card">
                            <span className="feature-icon">{item.icon}</span>
                            <span className="feature-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatYouGet
