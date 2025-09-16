import { useState, useEffect, useCallback } from 'react'

const useSwiper = (totalSlides, slidesPerView = { desktop: 3, tablet: 2, mobile: 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSlidesPerView, setCurrentSlidesPerView] = useState(slidesPerView.desktop)

  const updateSlidesPerView = useCallback(() => {
    if (window.innerWidth <= 768) {
      setCurrentSlidesPerView(slidesPerView.mobile)
    } else if (window.innerWidth <= 1200) {
      setCurrentSlidesPerView(slidesPerView.tablet)
    } else {
      setCurrentSlidesPerView(slidesPerView.desktop)
    }
  }, [slidesPerView])

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    
    return () => {
      window.removeEventListener('resize', updateSlidesPerView)
    }
  }, [updateSlidesPerView])

  const goToNext = useCallback(() => {
    const maxIndex = Math.max(0, totalSlides - currentSlidesPerView)
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1)
    }
  }, [currentIndex, totalSlides, currentSlidesPerView])

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }, [currentIndex])

  const canGoNext = currentIndex < Math.max(0, totalSlides - currentSlidesPerView)
  const canGoPrev = currentIndex > 0

  return {
    currentIndex,
    currentSlidesPerView,
    goToNext,
    goToPrev,
    canGoNext,
    canGoPrev,
    setCurrentIndex
  }
}

export default useSwiper
