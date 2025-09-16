import React from 'react'
import PortfolioSwiper from './PortfolioSwiper'
import Lightbox from '../../../components/shared/Lightbox'
import useLightbox from '../../../hooks/useLightbox'

const PortfolioSection = () => {
  const lightboxProps = useLightbox()

  return (
    <>
      <section id="portfolio" className="portfolio py-10 bg-[var(--color-background)]">
        <div className="portfolio-container flex flex-col gap-8 items-center p-5 max-w-[1400px] mx-5">
          <div className="portfolio-heading flex-none pt-10 text-center w-full mb-2.5">
            <h1 className="text-[3rem] ml-0 text-[#1a1a1a] leading-none text-left font-bold">
              Our Portfolio
            </h1>
          </div>
          
          <PortfolioSwiper onImageClick={lightboxProps.openLightbox} />
        </div>
      </section>
      
      <Lightbox {...lightboxProps} />
    </>
  )
}

export default PortfolioSection
