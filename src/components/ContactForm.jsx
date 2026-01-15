import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        whatsapp: '',
        company: '',
        website: '',
        size: '',
        package: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({
            email: '',
            whatsapp: '',
            company: '',
            website: '',
            size: '',
            package: '',
            message: ''
        })
    }

    return (
        <div className="contact-wrapper" id="consultation-section">
            <div className="container container-narrow">
                <h2 className="section-title section-title-white">Ready to start your AI <span className="seo-highlight">SEO</span> journey?</h2>
                <p className="section-subtitle">
                    We review your website and show how AI SEO can help.
                </p>

                {submitted ? (
                    <div className="success-message">
                        <span className="success-icon">✓</span>
                        <p>Thank you! We'll contact you within 24 hours.</p>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="whatsapp">WhatsApp Number *</label>
                                <input
                                    type="tel"
                                    id="whatsapp"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder="+60 12-345 6789"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">Company Name *</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="website">Company Website Link</label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="https://yourwebsite.com"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="size">Company Size *</label>
                            <select
                                id="size"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select company size</option>
                                <option value="1-10">1-5 employees</option>
                                <option value="11-50">6-20 employees</option>
                                <option value="51-200">21-50 employees</option>
                                <option value="200+">51+ employees</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Select Package *</label>
                            <div className="package-selection">
                                <label className={`package-option ${formData.package === 'individual' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="package"
                                        value="individual"
                                        checked={formData.package === 'individual'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="package-info">
                                        <span className="package-name">Individual</span>
                                        <span className="package-price">RM 2,000</span>
                                    </span>
                                </label>
                                <label className={`package-option ${formData.package === 'enterprise' ? 'selected' : ''}`}>
                                    <input
                                        type="radio"
                                        name="package"
                                        value="enterprise"
                                        checked={formData.package === 'enterprise'}
                                        onChange={handleChange}
                                    />
                                    <span className="package-info">
                                        <span className="package-name">Enterprise</span>
                                        <span className="package-price">RM 7,000</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message / Notes (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                placeholder="What do you need help with?"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                                Subscribe Now!
                        </button>
                        <p className="form-trust">No spam. No pressure. No obligation.</p>
                    </form>
                )}
            </div>
        </div>
    )
}

export default ContactForm
