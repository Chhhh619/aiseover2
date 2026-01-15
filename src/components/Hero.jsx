import { useState, useEffect, useRef } from 'react'
import { useModal } from '../context/ModalContext'
import './Hero.css'

function Hero() {
    const { openContactModal } = useModal()
    const [count, setCount] = useState(0)
    const [showCelebration, setShowCelebration] = useState(false)
    const targetCount = 1000
    const animationRef = useRef(null)
    const progressRef = useRef(null)

    useEffect(() => {
        const duration = 3000
        const startTime = performance.now()

        const easeOutExpo = (t) => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
        }

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easedProgress = easeOutExpo(progress)
            const currentCount = Math.floor(easedProgress * targetCount)

            setCount(currentCount)

            if (progressRef.current) {
                progressRef.current.style.width = `${easedProgress * 100}%`
            }

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setShowCelebration(true)
                setTimeout(() => setShowCelebration(false), 3000)
            }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    const handleCTAClick = (e) => {
        e.preventDefault()
        openContactModal()
    }

    return (
        <section className="hero" id="hero">
            {/* Background Elements */}
            <div className="hero-bg">
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape-cube" style={{ top: '20%', left: '10%' }}></div>
                    <div className="shape-cube" style={{ bottom: '30%', right: '15%' }}></div>
                </div>
            </div>

            <div className="container">
                <div className="hero-grid">
                    {/* Left Column - Text Content */}
                    <div className="hero-content">
                        <h1 className="hero-title">
                            AI <span className="highlight">SEO</span> That Helps Your Business Get Found and Get Leads
                        </h1>
                        <p className="hero-subtitle">
                            <strong>Rank on AI platform.</strong> Get featured in AI-powered search results.
                            <br />
                            AI SEO content built for SMEs.
                        </p>
                        <div className="hero-cta-wrapper">
                            <button
                                onClick={handleCTAClick}
                                className="btn btn-primary btn-lg"
                            >
                                Let Us Review Your Website
                            </button>
                        </div>
                        <p className="trust-sub">Cancel anytime. Full refund. No questions asked.</p>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="hero-visual">
                        <div className={`hero-metrics-card ${showCelebration ? 'celebrating' : ''}`}>
                            {showCelebration && (
                                <div className="confetti-container">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className={`confetti confetti-${i % 5}`} style={{
                                            left: `${Math.random() * 100}%`,
                                            animationDelay: `${Math.random() * 0.5}s`
                                        }} />
                                    ))}
                                </div>
                            )}
                            <div className="metrics-status">
                                <span className="status-indicator"></span>
                                <span className="status-text">AI Articles Generated...</span>
                            </div>
                            <div className="metrics-display">
                                <div className={`metrics-number ${showCelebration ? 'pulse' : ''}`}>
                                    {count.toLocaleString()}
                                </div>
                                <div className="metrics-label">Articles Created</div>
                            </div>
                            <div className="metrics-progress">
                                <div
                                    ref={progressRef}
                                    className="progress-bar"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
