import React from 'react'
import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-6 h-6 ${index < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="testimonial-card bg-white rounded-[20px] p-4 px-8 border border-gray-300 shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="stars flex mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <p className="testimonial-text text-base leading-relaxed text-[var(--color-text)] mb-5">
        "{testimonial.text}"
      </p>
      
      <div className="testimonial-author flex items-center gap-4">
        <img 
          src={testimonial.avatar}
          alt={testimonial.name}
          className="author-avatar w-[50px] h-[50px] rounded-full object-cover"
        />
        <div className="author-info">
          <h4 className="text-lg m-0 text-[var(--color-secondary)]">
            {testimonial.name}
          </h4>
          <p className="text-sm text-[var(--color-secondary)] mt-1 mb-0 opacity-80">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
