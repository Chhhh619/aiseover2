import { useScrollReveal } from '../hooks/useScrollReveal'
import './Clients.css'

function Clients() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 })
    const { ref: row1Ref, isVisible: row1Visible } = useScrollReveal({ threshold: 0.1 })
    const { ref: row2Ref, isVisible: row2Visible } = useScrollReveal({ threshold: 0.1 })

    // Split clients into two rows - unique clients per row
    const clientsRow1 = [
        { name: 'Mishu', logo: '/images/clients/Mishu Sdn Bhd.png' },
        { name: 'Belive', logo: '/images/clients/Belive_Logo.png' },
        { name: 'PUMM', logo: '/images/clients/PUMM_Logo.png' },
        { name: 'Toastmaster', logo: '/images/clients/ToastMaster_Logo.png' },
        { name: 'Exabytes', logo: '/images/clients/Exabytes_Logo.png' }
    ]

    const clientsRow2 = [
        { name: 'Sri Ternak', logo: '/images/clients/Sri Ternak_Logo.png' },
        { name: 'Easy Parcel', logo: '/images/clients/EasyParcel_Logo.png' },
        { name: 'Addar', logo: '/images/clients/Addar_Logo.png' },
        { name: 'Rozel', logo: '/images/clients/Rozel.png' }
    ]

    // Duplicate for seamless infinite scroll
    const duplicatedRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1]
    const duplicatedRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2]

    return (
        <section className="section section-dark" id="clients">
            <div className="container" ref={titleRef}>
                <span className={`clients-label reveal reveal-up ${titleVisible ? 'revealed' : ''}`}>Our Clients of MampuAI •</span>
                <h2 className={`clients-title reveal reveal-up reveal-delay-1 ${titleVisible ? 'revealed' : ''}`}>Trusted by</h2>
            </div>

            {/* Row 1 - Right to Left */}
            <div className={`clients-marquee-wrapper reveal reveal-left reveal-delay-2 ${row1Visible ? 'revealed' : ''}`} ref={row1Ref}>
                <div className="clients-marquee clients-marquee-rtl">
                    {duplicatedRow1.map((client, index) => (
                        <div key={index} className="client-logo-item">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="client-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2 - Left to Right */}
            <div className={`clients-marquee-wrapper reveal reveal-right reveal-delay-3 ${row2Visible ? 'revealed' : ''}`} ref={row2Ref}>
                <div className="clients-marquee clients-marquee-ltr">
                    {duplicatedRow2.map((client, index) => (
                        <div key={index} className="client-logo-item">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="client-logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients
