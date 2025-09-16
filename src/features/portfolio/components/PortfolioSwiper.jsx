import React from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioNavigation from './PortfolioNavigation'
import useSwiper from '../../../hooks/useSwiper'
import { portfolioData } from '../data/portfolioData'

const PortfolioSwiper = ({ onImageClick }) => {
  const { currentIndex, currentSlidesPerView, goToNext, goToPrev, canGoNext, canGoPrev } = useSwiper(portfolioData.length)

  return (
    <div className="portfolio-swiper relative pb-[60px] max-w-[1200px] mx-auto w-full overflow-hidden">
      <div className="swiper-container w-full p-2.5 overflow-visible relative">
        <div 
          className="swiper-wrapper flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / currentSlidesPerView)}%)`
          }}
        >
          {portfolioData.map((item) => (
            <PortfolioItem 
              key={item.id} 
              item={item} 
              onClick={() => onImageClick(item)}
            />
          ))}
        </div>
      </div>
      
      <PortfolioNavigation 
        onPrev={goToPrev}
        onNext={goToNext}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
      />
    </div>
  )
}

export default PortfolioSwiper
