import { useState } from 'react'
import './HowItWorks.css'

function HowItWorks() {
    const [activeTab, setActiveTab] = useState(0)

    const steps = [
        {
            title: 'We study what your customers search',
            description: 'AI analyzes real Google searches related to your business.',
            icon: '🔍'
        },
        {
            title: 'We design content Google wants to rank',
            description: 'Clear structure based on proven ranking patterns.',
            icon: '📐'
        },
        {
            title: 'AI creates content fast and consistently',
            description: 'High-quality drafts without delays.',
            icon: '🤖'
        },
        {
            title: 'Humans refine for trust and clarity',
            description: 'Real examples, clear messaging, business logic.',
            icon: '✍️'
        },
        {
            title: "Built for Google's AI-powered search",
            description: 'Content structured for modern search behavior.',
            icon: '⚡'
        }
    ]

    return (
        <section className="section section-light" id="how-it-works">
            <div className="container">
                <h2 className="section-title section-title-dark">How It Works</h2>
                <p className="section-subtitle" style={{ color: 'var(--text-body)' }}>Our AI-powered process in 5 simple steps</p>

                {/* Tab Navigation - Cleverus Style */}
                <div className="tabs-nav">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <span className="tab-number">Step {index + 1}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    <div className="tab-icon">{steps[activeTab].icon}</div>
                    <h3 className="tab-title">{steps[activeTab].title}</h3>
                    <p className="tab-description">{steps[activeTab].description}</p>
                </div>

                {/* Mobile Swipe Dots */}
                <div className="swipe-dots hide-desktop">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            className={`swipe-dot ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
