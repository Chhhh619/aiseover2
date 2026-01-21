import './Clients.css'

function Clients() {
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
            <div className="container">
                <span className="clients-label">Our Clients •</span>
                <h2 className="clients-title">Trusted by</h2>
            </div>

            {/* Row 1 - Right to Left */}
            <div className="clients-marquee-wrapper">
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
            <div className="clients-marquee-wrapper">
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
