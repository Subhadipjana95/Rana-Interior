// Animation utility functions and configurations

// Easing functions
export const easing = {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  }
  
  // Animation durations (in milliseconds)
  export const duration = {
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 750,
    slowest: 1000
  }
  
  // Common animation configurations
  export const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: duration.normal, easing: easing.easeOut }
    },
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: duration.normal, easing: easing.easeOut }
    },
    fadeInDown: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: duration.normal, easing: easing.easeOut }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: duration.normal, easing: easing.easeOut }
    },
    slideInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: duration.normal, easing: easing.easeOut }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: duration.normal, easing: easing.bounce }
    },
    bounceIn: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: duration.slow, easing: easing.bounce }
    }
  }
  
  // Scroll-triggered animation helper
  export const createScrollAnimation = (element, animationType = 'fadeInUp', threshold = 0.1) => {
    if (!element || typeof IntersectionObserver === 'undefined') return
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
  
    observer.observe(element)
    return observer
  }
  
  // Stagger animation helper for multiple elements
  export const staggerElements = (elements, delay = 100) => {
    elements.forEach((element, index) => {
      if (element) {
        element.style.animationDelay = `${index * delay}ms`
      }
    })
  }
  
  // Parallax scrolling effect
  export const createParallaxEffect = (element, speed = 0.5) => {
    if (!element) return
  
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -speed
      element.style.transform = `translateY(${rate}px)`
    }
  
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }
  
  // Smooth scroll to element
  export const smoothScrollTo = (target, duration = 1000, offset = 0) => {
    const targetElement = typeof target === 'string' ? document.querySelector(target) : target
    if (!targetElement) return
  
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function (ease-in-out)
      const ease = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2
  
      window.scrollTo(0, startPosition + distance * ease)
  
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }
  
    requestAnimationFrame(animation)
  }
  
  // Typing animation effect
  export const typeWriter = (element, text, speed = 50, callback = null) => {
    if (!element) return
  
    let i = 0
    element.textContent = ''
  
    const typing = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(typing, speed)
      } else if (callback) {
        callback()
      }
    }
  
    typing()
  }
  
  // Number counter animation
  export const animateNumber = (element, start, end, duration = 2000, formatter = (n) => n) => {
    if (!element) return
  
    const range = end - start
    const startTime = performance.now()
  
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const current = start + range * easeOut
      element.textContent = formatter(Math.floor(current))
  
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        element.textContent = formatter(end)
      }
    }
  
    requestAnimationFrame(animate)
  }
  
  // CSS class animation helpers
  export const addAnimationClass = (element, className, duration = 300) => {
    if (!element) return Promise.resolve()
  
    return new Promise(resolve => {
      element.classList.add(className)
      
      const handleAnimationEnd = () => {
        element.removeEventListener('animationend', handleAnimationEnd)
        resolve()
      }
      
      element.addEventListener('animationend', handleAnimationEnd)
      
      // Fallback timeout
      setTimeout(() => {
        element.removeEventListener('animationend', handleAnimationEnd)
        resolve()
      }, duration)
    })
  }
  
  // Loading animation helpers
  export const showLoading = (element, message = 'Loading...') => {
    if (!element) return
  
    element.innerHTML = `
      <div class="flex items-center justify-center space-x-2">
        <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
        <span>${message}</span>
      </div>
    `
  }
  
  // Animation performance helpers
  export const reduceMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  
  // Viewport-based animations
  export const isInViewport = (element, threshold = 0) => {
    if (!element) return false
    
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight
    
    return (
      rect.top <= windowHeight - threshold &&
      rect.bottom >= threshold
    )
  }
  
  // Export all animation utilities as default
  export default {
    easing,
    duration,
    animations,
    createScrollAnimation,
    staggerElements,
    createParallaxEffect,
    smoothScrollTo,
    typeWriter,
    animateNumber,
    addAnimationClass,
    showLoading,
    reduceMotion,
    isInViewport
  }
  