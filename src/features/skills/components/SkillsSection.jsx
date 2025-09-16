import React from 'react'
import SkillCategory from './SkillCategory'
import { skillsData } from '../data/skillsData'

const SkillsSection = () => {
  return (
    <section id="skills" className="skills py-16 sm:py-20 md:py-24 lg:py-[120px] bg-[var(--color-background)]">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-5 md:px-6">
        {/* Responsive flex layout: column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[5vw]">
          
          {/* Header section - responsive positioning and typography */}
          <div className="flex-none w-full lg:w-auto mb-4 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] leading-tight font-bold text-black pt-0 lg:pt-[100px] text-center lg:text-left">
              Skills &<br />Proficiencies
            </h1>
          </div>
          
          {/* Content grid - responsive layout */}
          <div className="flex-1 grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-[5vw]">
            {skillsData.map((category, index) => (
              <SkillCategory key={index} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
