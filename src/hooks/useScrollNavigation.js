import { useEffect } from 'react'

const useScrollNavigation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.bottom-navbar li a')

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          
          // Remove active class from all nav items
          document.querySelectorAll('.bottom-navbar li').forEach(item => {
            item.classList.remove('active')
          })
          
          // Add active class to the corresponding nav item
          const correspondingNavItem = document.querySelector(`.bottom-navbar li a[href="#${id}"]`)?.parentElement
          if (correspondingNavItem) {
            correspondingNavItem.classList.add('active')
          }
        }
      })
    }, observerOptions)

    sections.forEach(section => {
      observer.observe(section)
    })

    // Handle click events on nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        document.querySelectorAll('.bottom-navbar li').forEach(item => {
          item.classList.remove('active')
        })
        this.parentElement.classList.add('active')
      })
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])
}

export default useScrollNavigation
