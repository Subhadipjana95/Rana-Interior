import React from 'react'
import ServiceCard from './ServiceCard'
import WarrantyCard from './WarrantyCard'
import { servicesData } from '../data/servicesData'

const ServicesSection = () => {
  return (
    <section id="Process" className="what-we-offer py-[120px] pb-[60px] bg-[var(--color-background)]">
      <div className="container flex justify-start items-start gap-[60px] max-w-[1200px] mx-5">
        <h1 className="text-[3rem] leading-tight flex-none w-[300px] m-0 sticky top-10 font-bold mb-[60px] pt-10">
          Crafted for You
        </h1>
        
        <div className="offer-cards flex flex-wrap gap-8 flex-1 justify-center max-w-[1200px] mx-auto px-8">
          <ServiceCard services={servicesData.services} />
          <WarrantyCard warranty={servicesData.warranty} />
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
