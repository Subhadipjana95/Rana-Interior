import React from 'react'
import Button from '../../../components/ui/Button'

const HeroContent = ({ onGetQuote }) => {
  return (
    <div className="flex-1 relative z-[3] text-[var(--color-secondary)] p-8 max-w-[1130px]">
      <h1 className="text-[7rem] font-bold mb-2.5 text-[var(--color-secondary)] leading-tight">
        Rana Interior.
      </h1>
      <p className="font-syne text-[2rem] font-medium leading-tight text-[var(--color-secondary)] max-w-[600px] mb-8">
        Every Design Crafted with Love and Thoughtful Ingredients
      </p>
      <Button variant="hero" icon onClick={onGetQuote}>
        Get a Quote
      </Button>
    </div>
  )
}

export default HeroContent
