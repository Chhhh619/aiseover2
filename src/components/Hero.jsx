import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getArticleCount, subscribeToArticleChanges } from '../lib/supabase'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

// Animated digit component with smooth linear transition
function AnimatedDigit({ digit }) {
    return (
        <div className="digit-container">
            <motion.div
                className="digit-roller"
                initial={false}
                animate={{ y: `-${digit * 10}%` }}
                transition={{
                    type: "tween",
                    duration: 0.3,
                    ease: "easeOut"
                }}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                    <span key={num} className="digit">{num}</span>
                ))}
            </motion.div>
        </div>
    )
}

// Animated counter that displays each digit with smooth rolling animation
function AnimatedCounter({ value }) {
    const formattedValue = value.toLocaleString()
    const chars = formattedValue.split('')
    const totalChars = chars.length

    return (
        <div className="animated-counter">
            <AnimatePresence mode="popLayout">
                {chars.map((char, index) => {
                    const posFromRight = totalChars - 1 - index
                    if (char === ',') {
                        return (
                            <motion.span
                                key={`comma-${posFromRight}`}
                                className="comma"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                ,
                            </motion.span>
                        )
                    }
                    return <AnimatedDigit key={`digit-${posFromRight}`} digit={parseInt(char)} />
                })}
            </AnimatePresence>
        </div>
    )
}

function Hero() {
    const [actualCount, setActualCount] = useState(0)
    const [displayCount, setDisplayCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const intervalTimeRef = useRef(50)

    // Round down to nearest magnitude (148 → 100, 1523 → 1000, 85 → 80)
    const floorToMagnitude = (num) => {
        if (num < 10) return 0
        const magnitude = Math.pow(10, Math.floor(Math.log10(num)))
        return Math.floor(num / magnitude) * magnitude
    }

    useEffect(() => {
        // Fetch initial count
        const fetchCount = async () => {
            const { count: articleCount } = await getArticleCount()
            const startCount = floorToMagnitude(articleCount)
            const difference = articleCount - startCount
            // Calculate fixed interval for ~2.5 seconds total, minimum 50ms
            intervalTimeRef.current = Math.max(50, 2500 / difference)
            setActualCount(articleCount)
            setDisplayCount(startCount)
            setIsLoading(false)
        }
        fetchCount()

        // Subscribe to real-time inserts - increment count when new articles are created
        const unsubscribe = subscribeToArticleChanges(() => {
            setActualCount(prev => prev + 1)
        })

        return () => unsubscribe()
    }, [])

    // Animate count up: 100 → 101 → 102 → ... → 148 at constant speed
    useEffect(() => {
        if (isLoading || displayCount >= actualCount) return

        const timer = setTimeout(() => {
            setDisplayCount(prev => prev + 1)
        }, intervalTimeRef.current)

        return () => clearTimeout(timer)
    }, [displayCount, actualCount, isLoading])

    const scrollToPricing = (e) => {
        e.preventDefault()
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
    }

    const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })
    const { ref: visualRef, isVisible: visualVisible } = useScrollReveal({ threshold: 0.1, rootMargin: '0px' })

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
                    <div className={`hero-content reveal reveal-left ${contentVisible ? 'revealed' : ''}`} ref={contentRef}>
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
                                onClick={scrollToPricing}
                                className="btn btn-primary btn-lg"
                            >
                                Get Started Now
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className={`hero-visual reveal reveal-right reveal-delay-2 ${visualVisible ? 'revealed' : ''}`} ref={visualRef}>
                        <div className="hero-metrics-card">
                            <div className="metrics-status">
                                <span className="status-indicator"></span>
                                <span className="status-text">AI Articles Generated...</span>
                            </div>
                            <div className="metrics-display">
                                <div className="metrics-number">
                                    {isLoading ? (
                                        <div className="counter-skeleton"></div>
                                    ) : (
                                        <AnimatedCounter value={displayCount} />
                                    )}
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
