import './Collab.css'

function Collab() {
    return (
        <section className="collab" id="collab">
            <div className="container">
                <div className="collab-content">
                    <div className="collab-badge">New Partnership</div>
                    <h2 className="collab-title">
                        Powered by Industry Leaders
                    </h2>
                    <p className="collab-subtitle">
                        An initiative co-developed by <strong>Mampu<span className="mampu-ai-yellow">AI</span></strong> and <strong className="dattel-highlight">Dattel Asia Group</strong>
                    </p>
                </div>
            </div>
            <div className="collab-image-container">
                <div className="collab-image-bg"></div>
            </div>
        </section>
    )
}

export default Collab
