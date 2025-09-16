import { useState, useCallback } from 'react'

const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)

  const openLightbox = useCallback((imageData) => {
    setCurrentImage(imageData)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    setCurrentImage(null)
    document.body.style.overflow = ''
  }, [])

  return {
    isOpen,
    currentImage,
    openLightbox,
    closeLightbox
  }
}

export default useLightbox
