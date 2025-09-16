import React from 'react'

const PortfolioItem = ({ item, onClick }) => {
  return (
    <div className="swiper-slide flex-none w-[calc(33.333%-20px)] mx-2.5 box-border transition-transform duration-300 flex justify-center cursor-pointer" onClick={onClick}>
      <div className="portfolio-item relative bg-[var(--color-accent)] rounded-[20px] shadow-md h-[97%] flex flex-col p-5 px-3.5 border border-black/10 overflow-hidden">
        <div className="item-number absolute top-[3px] left-[13px] text-2xl text-[var(--color-background)] font-medium z-[2]">
          {item.number}
        </div>
        
        <div className="image-container rounded-md relative w-full h-[310px] my-5 mb-2.5 overflow-hidden">
          <img 
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="item-content mt-auto">
          <h3 className="text-2xl mb-2.5 text-[var(--color-background)] font-semibold leading-tight">
            {item.title}
          </h3>
          <p className="text-sm leading-6 text-[var(--color-background)] m-0">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
