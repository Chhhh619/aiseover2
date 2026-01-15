import './WhatYouGet.css'

function WhatYouGet() {
    const items = [
        {
            title: 'AI-Optimized Content',
            description: 'Strategic content crafted to rank in AI-powered search results and recommendations.',
            image: '/images/aioptimised.png'
        },
        {
            title: 'Keyword Research',
            description: 'Deep analysis of keywords that AI platforms prioritize for your industry.',
            image: '/images/keyword.png'
        },
        {
            title: 'AI-Ready Content',
            description: 'Content structured and formatted for AI summaries and featured snippets.',
            image: '/images/content.png'
        },
        {
            title: 'Performance Tracking',
            description: 'Regular monitoring of your AI search visibility and traffic metrics.',
            image: '/images/performancetrack.png'
        },
        {
            title: 'Dedicated Support',
            description: 'Expert team available to answer questions and optimize your strategy.',
            image: '/images/supportteam.png'
        },
        {
            title: 'Monthly Updates',
            description: 'Continuous optimization to keep up with evolving AI algorithms.',
            image: '/images/updates.png'
        }
    ]

    return (
        <section className="section section-light" id="whatyouget">
            <div className="container">
                <h2 className="section-title section-title-dark">What's Included</h2>
                <div className="wyg-cards-grid">
                    {items.map((item, index) => (
                        <div key={index} className="wyg-card">
                            <div className="wyg-card-content">
                                <h3 className="wyg-card-title">{item.title}</h3>
                                <p className="wyg-card-description">{item.description}</p>
                            </div>
                            <div className="wyg-card-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatYouGet
