import { useState, useEffect } from 'react'
import { useModal } from '../context/ModalContext'
import { submitContactForm } from '../lib/supabase'
import './ContactModal.css'

function ContactModal() {
    const { isContactModalOpen, closeContactModal } = useModal()
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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(null)

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeContactModal()
        }
        if (isContactModalOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isContactModalOpen, closeContactModal])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        const result = await submitContactForm({
            ...formData,
            source: 'modal_popup'
        })

        setIsSubmitting(false)

        if (result.success) {
            setSubmitted(true)
            setTimeout(() => {
                setSubmitted(false)
                closeContactModal()
            }, 3000)
            setFormData({
                email: '',
                whatsapp: '',
                company: '',
                website: '',
                size: '',
                package: '',
                message: ''
            })
        } else {
            setError('Something went wrong. Please try again.')
            console.error('Form submission failed:', result.error)
        }
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeContactModal()
        }
    }

    if (!isContactModalOpen) return null

    return (
        <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className="modal-container">
                <button className="modal-close" onClick={closeContactModal}>
                    <span>&times;</span>
                </button>

                <div className="modal-content">
                    <h2 className="modal-title">Ready to start your AI <span className="seo-highlight">SEO</span> journey?</h2>
                    <p className="modal-subtitle">
                        We review your website and show how AI SEO can help.
                    </p>

                    {submitted ? (
                        <div className="success-message">
                            <span className="success-icon">✓</span>
                            <h3>Thank you for your submission!</h3>
                            <p>We will contact you via WhatsApp or Email shortly.</p>
                        </div>
                    ) : (
                        <form className="modal-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="modal-email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="modal-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-whatsapp">WhatsApp Number *</label>
                                    <input
                                        type="tel"
                                        id="modal-whatsapp"
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
                                    <label htmlFor="modal-company">Company Name *</label>
                                    <input
                                        type="text"
                                        id="modal-company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modal-website">Company Website Link *</label>
                                    <input
                                        type="url"
                                        id="modal-website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                        placeholder="https://yourwebsite.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="modal-size">Company Size *</label>
                                <select
                                    id="modal-size"
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
                                <label htmlFor="modal-message">Message / Notes (Optional)</label>
                                <textarea
                                    id="modal-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="What do you need help with?"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Subscribe Now!'}
                            </button>
                            {error && <p className="form-error">{error}</p>}
                            <p className="form-trust">No spam. No pressure. No obligation.</p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ContactModal
