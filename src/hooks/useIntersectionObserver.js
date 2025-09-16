import { useState, useEffect, useRef } from 'react'

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef(null)

  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      
      // Track if element has ever been intersected (useful for one-time animations)
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }, defaultOptions)

    observer.observe(target)

    return () => {
      if (target) {
        observer.unobserve(target)
      }
    }
  }, [hasIntersected, defaultOptions.root, defaultOptions.rootMargin, defaultOptions.threshold])

  return { targetRef, isIntersecting, hasIntersected }
}

// Hook for observing multiple elements
export const useMultipleIntersectionObserver = (elementsCount, options = {}) => {
  const [intersectingElements, setIntersectingElements] = useState(new Set())
  const targetRefs = useRef([])

  useEffect(() => {
    // Initialize refs array
    targetRefs.current = targetRefs.current.slice(0, elementsCount)
    for (let i = targetRefs.current.length; i < elementsCount; i++) {
      targetRefs.current[i] = React.createRef()
    }
  }, [elementsCount])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIntersectingElements(prev => {
        const newSet = new Set(prev)
        entries.forEach(entry => {
          const index = targetRefs.current.findIndex(ref => ref.current === entry.target)
          if (entry.isIntersecting) {
            newSet.add(index)
          } else {
            newSet.delete(index)
          }
        })
        return newSet
      })
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    })

    targetRefs.current.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      targetRefs.current.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current)
        }
      })
    }
  }, [elementsCount])

  return { targetRefs: targetRefs.current, intersectingElements }
}

export default useIntersectionObserver
