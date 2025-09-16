import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PortfolioNavigation = ({ onPrev, onNext, canGoPrev, canGoNext }) => {
  return (
    <div className="swiper-navigation flex justify-start gap-2.5 -mt-2.5 ml-5 relative bottom-0 w-full">
      <button 
        className={`swiper-button-prev flex items-center justify-center cursor-pointer transition-all duration-300 static mt-0 shadow-none border-none outline-none left-0 w-[50px] h-[50px] bg-[var(--color-secondary)] rounded-[15px] text-[var(--color-background)] hover:-translate-x-[3px] ${!canGoPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onPrev}
        disabled={!canGoPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className={`swiper-button-next flex items-center justify-center cursor-pointer transition-all duration-300 static mt-0 shadow-none border-none outline-none right-0 w-[100px] h-[50px] bg-[var(--color-accent)] rounded-[15px] text-[var(--color-background)] hover:translate-x-[3px] ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={onNext}
        disabled={!canGoNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default PortfolioNavigation
