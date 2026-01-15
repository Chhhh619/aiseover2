import './WhatYouGet.css'

function WhatYouGet() {
    const items = [
        { icon: '✓', text: 'AI-optimized content strategy' },
        { icon: '✓', text: 'Keyword research for AI platforms' },
        { icon: '✓', text: 'Content formatted for AI summaries' },
        { icon: '✓', text: 'Regular performance tracking' },
        { icon: '✓', text: 'Dedicated support team' },
        { icon: '✓', text: 'Monthly optimization updates' }
    ]

    return (
        <section className="section section-light" id="whatyouget">
            <div className="container">
                <h2 className="section-title section-title-dark">What's Included</h2>
                <div className="checklist-grid">
                    {items.map((item, index) => (
                        <div key={index} className="checklist-item">
                            <span className="checklist-icon">{item.icon}</span>
                            <span className="checklist-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatYouGet
