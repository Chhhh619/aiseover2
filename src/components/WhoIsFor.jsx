import './WhoIsFor.css'

function WhoIsFor() {
    const items = [
        '✓ You want inbound leads',
        '✓ You sell services or expertise',
        '✓ You run a SaaS or AI business',
        '✓ Your customers search before buying'
    ]

    return (
        <section className="section section-dark" id="who">
            <div className="container container-narrow">
                <h2 className="section-title section-title-white">AI SEO Is Right for You If...</h2>
                <div className="who-card">
                    <ul className="who-list">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WhoIsFor
