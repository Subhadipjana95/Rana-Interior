import React, { useEffect } from 'react'
import { X } from 'lucide-react'

const Lightbox = ({ isOpen, currentImage, closeLightbox }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeLightbox()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeLightbox])

  if (!isOpen || !currentImage) return null

  return (
    <div 
      className="lightbox fixed inset-0 z-[1002] bg-black/90 backdrop-blur-sm flex items-center justify-center"
      onClick={closeLightbox}
    >
      <div className="lightbox-content flex items-center justify-center relative max-w-[90%] max-h-[90%] m-auto transform scale-100 opacity-100 transition-all duration-300">
        <button
          onClick={closeLightbox}
          className="close-lightbox fixed -right-12 top-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-[32px] font-bold text-white cursor-pointer transition-all duration-200 z-[1003] hover:bg-white/40 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="lightbox-details text-white p-4 mr-8 rounded-b text-left">
          <h3 className="m-0 mb-2.5 text-[2.3rem] text-white">
            {currentImage.title}
          </h3>
          <p className="max-w-[450px] text-lg leading-tight">
            {currentImage.description}
          </p>
        </div>
        
        <img 
          src={currentImage.image}
          alt={currentImage.alt}
          className="lightbox-img block max-w-full max-h-[80vh] object-contain rounded-md shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

export default Lightbox
