import { useState, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './HowItWorks.css'

function HowItWorks() {
    const [activeTab, setActiveTab] = useState(0)
    const [slideDirection, setSlideDirection] = useState('right')
    const [animationKey, setAnimationKey] = useState(0)
    const sliderRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const changeTab = (newTab) => {
        if (newTab !== activeTab) {
            setSlideDirection(newTab > activeTab ? 'right' : 'left')
            setAnimationKey(prev => prev + 1)
            setActiveTab(newTab)
        }
    }

    const steps = [
        {
            title: 'Provide Your URL',
            description: 'Share your website link so our AI can analyze your brand, services, audience, and existing content.',
            icon: '🔗'
        },
        {
            title: 'Provide Your Domain Access',
            description: 'Grant limited CMS access to enable automated publishing and on-page SEO optimization.',
            icon: '🔑'
        },
        {
            title: 'Provide Your Target Keywords',
            description: 'Submit your target keywords, or let our AI recommend high-potential keywords for your industry.',
            icon: '🎯'
        },
        {
            title: 'AI Generates & Publishes Articles Automatically',
            description: 'Our system creates SEO-optimized content, applies proper structure and internal linking, and publishes directly to your website.',
            icon: '🤖'
        },
        {
            title: 'Continuous Website Analytics & Reporting',
            description: 'Track rankings, traffic, engagement, and conversions through structured performance reports.',
            icon: '📊'
        }
    ]

    // Touch/swipe handlers for mobile
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
    }

    const handleTouchEnd = (e) => {
        if (!isDragging) return
        setIsDragging(false)

        const endX = e.changedTouches[0].pageX
        const diff = startX - endX

        if (Math.abs(diff) > 50) {
            if (diff > 0 && activeTab < steps.length - 1) {
                changeTab(activeTab + 1)
            } else if (diff < 0 && activeTab > 0) {
                changeTab(activeTab - 1)
            }
        }
    }

    // Mouse drag handlers for desktop
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
    }

    const handleMouseUp = (e) => {
        if (!isDragging) return
        setIsDragging(false)

        const diff = startX - e.pageX

        if (Math.abs(diff) > 50) {
            if (diff > 0 && activeTab < steps.length - 1) {
                changeTab(activeTab + 1)
            } else if (diff < 0 && activeTab > 0) {
                changeTab(activeTab - 1)
            }
        }
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
    }

    const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.2 })
    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1 })

    return (
        <section className="section section-light" id="how-it-works">
            <div className="container">
                <h2 className={`section-title section-title-dark reveal reveal-up ${titleVisible ? 'revealed' : ''}`} ref={titleRef}>How It Works</h2>
                <p className={`section-subtitle reveal reveal-up reveal-delay-1 ${titleVisible ? 'revealed' : ''}`} style={{ color: 'var(--text-body)' }}>Our AI-powered process in 5 simple steps</p>

                {/* Tab Navigation - Cleverus Style */}
                <div className={`tabs-nav reveal reveal-up reveal-delay-2 ${contentVisible ? 'revealed' : ''}`} ref={contentRef}>
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                            onClick={() => changeTab(index)}
                        >
                            <span className="tab-number">Step {index + 1}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content - Swipeable */}
                <div
                    className="tab-content"
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    <div
                        key={animationKey}
                        className={`tab-content-inner ${slideDirection === 'right' ? 'slide-right' : 'slide-left'}`}
                    >
                        <div className="tab-icon">{steps[activeTab].icon}</div>
                        <h3 className="tab-title">{steps[activeTab].title}</h3>
                        <p className="tab-description">{steps[activeTab].description}</p>
                    </div>
                    <p className="swipe-hint hide-desktop">← Swipe to navigate →</p>
                </div>

                {/* Mobile Swipe Dots */}
                <div className="swipe-dots">
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            className={`swipe-dot ${activeTab === index ? 'active' : ''}`}
                            onClick={() => changeTab(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
