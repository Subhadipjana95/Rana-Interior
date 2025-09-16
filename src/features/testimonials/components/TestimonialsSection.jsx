import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonialsData } from '../data/testimonialsData'

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials py-20 px-5 bg-[var(--color-background)]">
      <div className="container">
        <h1 className="text-[3rem] mb-0">
          What Our<br />Clients Say
        </h1>
        
        <div className="testimonial-cards grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-10">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
