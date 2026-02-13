import { useScrollReveal } from '../hooks/useScrollReveal'
import './Collab.css'

function Collab() {
    const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 })
    const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.1 })

    return (
        <section className="collab" id="collab">
            <div className="container">
                <div className="collab-content" ref={sectionRef}>
                    <div className={`collab-badge reveal reveal-down ${isVisible ? 'revealed' : ''}`}>New Partnership</div>
                    <h2 className={`collab-title reveal reveal-up reveal-delay-1 ${isVisible ? 'revealed' : ''}`}>
                        Powered by Industry Leaders
                    </h2>
                    <p className={`collab-subtitle reveal reveal-up reveal-delay-2 ${isVisible ? 'revealed' : ''}`}>
                        An initiative co-developed by <strong>MampuAI</strong> and <strong className="dattel-highlight">Dattel Asia Group</strong>
                    </p>
                </div>
            </div>
            <div className={`collab-image-container reveal reveal-pop reveal-delay-3 ${imageVisible ? 'revealed' : ''}`} ref={imageRef}>
                <div className="collab-image-bg"></div>
            </div>
        </section>
    )
}

export default Collab
