import { useState, useEffect, useRef } from 'react'
import { useModal } from '../context/ModalContext'
import './Hero.css'

// Animated digit component - rolls like an odometer
function AnimatedDigit({ digit }) {
    return (
        <div className="digit-container">
            <div
                className="digit-roller"
                style={{ transform: `translateY(-${digit * 10}%)` }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <span key={num} className="digit">{num}</span>
                ))}
            </div>
        </div>
    )
}

// Animated counter that displays each digit with rolling animation
function AnimatedCounter({ value }) {
    const formattedValue = value.toLocaleString()

    return (
        <div className="animated-counter">
            {formattedValue.split('').map((char, index) => {
                if (char === ',') {
                    return <span key={index} className="comma">,</span>
                }
                return <AnimatedDigit key={index} digit={parseInt(char)} />
            })}
        </div>
    )
}

function Hero() {
    const { openContactModal } = useModal()
    const [count, setCount] = useState(10000)
    const intervalRef = useRef(null)

    useEffect(() => {
        const STORAGE_KEY = 'cariseo_article_counter'
        const BASE_COUNT = 10000
        const RATE_MIN = 2 // articles per second
        const RATE_MAX = 5 // articles per second
        const AVG_RATE = (RATE_MIN + RATE_MAX) / 2 // 3.5 per second

        // Get or set the initial timestamp
        let startTimestamp = localStorage.getItem(STORAGE_KEY)
        if (!startTimestamp) {
            startTimestamp = Date.now().toString()
            localStorage.setItem(STORAGE_KEY, startTimestamp)
        }

        // Calculate count based on elapsed time
        const calculateCount = () => {
            const elapsed = Date.now() - parseInt(startTimestamp)
            const secondsElapsed = elapsed / 1000
            // Add some randomness by using a seeded variation
            const baseAddition = Math.floor(secondsElapsed * AVG_RATE)
            return BASE_COUNT + baseAddition
        }

        // Set initial count
        setCount(calculateCount())

        // Update every 300-500ms with random increment
        const tick = () => {
            const randomDelay = 300 + Math.random() * 200
            intervalRef.current = setTimeout(() => {
                setCount(prev => prev + Math.floor(Math.random() * 2) + 1)
                tick()
            }, randomDelay)
        }
        tick()

        return () => {
            if (intervalRef.current) {
                clearTimeout(intervalRef.current)
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
                        <div className="hero-metrics-card">
                            <div className="metrics-status">
                                <span className="status-indicator"></span>
                                <span className="status-text">AI Articles Generated...</span>
                            </div>
                            <div className="metrics-display">
                                <div className="metrics-number">
                                    <AnimatedCounter value={count} />
                                </div>
                                <div className="metrics-label">Articles Created</div>
                            </div>
                            <div className="metrics-progress">
                                <div className="progress-bar" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
