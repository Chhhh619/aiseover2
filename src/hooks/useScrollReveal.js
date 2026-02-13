import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element and whether it's visible.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.15
 * @param {string} options.rootMargin - Root margin, default '0px 0px -50px 0px'
 * @param {boolean} options.once - Only trigger once, default true
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  once = true
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}

/**
 * Hook that returns multiple refs for staggered animations.
 * Each item gets its own ref and visibility state.
 *
 * @param {number} count - Number of items
 * @param {Object} options - Same as useScrollReveal options
 */
export function useStaggerReveal(count, {
  threshold = 0.1,
  rootMargin = '0px 0px -30px 0px',
  once = true
} = {}) {
  const refs = useRef([])
  const [visibleItems, setVisibleItems] = useState(new Set())

  useEffect(() => {
    const observers = []

    refs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]))
            if (once) observer.unobserve(element)
          } else if (!once) {
            setVisibleItems(prev => {
              const next = new Set(prev)
              next.delete(index)
              return next
            })
          }
        },
        { threshold, rootMargin }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [count, threshold, rootMargin, once])

  const setRef = (index) => (el) => {
    refs.current[index] = el
  }

  return { setRef, visibleItems }
}
