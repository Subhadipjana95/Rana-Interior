import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import { cn } from '../../../utils/helpers'

const HeroSection = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const openQuoteForm = () => {
    setShowQuoteForm(true)
  }

  const closeQuoteForm = () => {
    setShowQuoteForm(false)
  }

  return (
    <>
      <section id="hero" className="hero bg-[var(--color-background)] min-h-screen p-2 sm:p-4 md:p-5 flex items-start sm:items-center relative">
        {/* Logo - Responsive positioning */}
        <img
          src="/assets/images/logo/logo3.png"
          alt="Rana Interior Logo"
          className="absolute top-4 right-4 max-w-[60px] sm:top-6 sm:right-6 sm:max-w-[80px] md:top-10 md:right-10 md:max-w-[100px] h-auto z-[21]"
        />
        
        {/* Main container - Responsive height and layout */}
        <div className="container w-full h-[85vh] sm:h-[88vh] md:h-[95vh] rounded-[15px] md:rounded-[20px] border border-[var(--color-primary)] shadow-xl flex justify-between items-start relative z-[22] text-[var(--color-primary)] overflow-hidden">
          
          {/* Background Video - Responsive with fallback */}
          <video 
            autoPlay 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover z-[23] brightness-90"
            poster="/assets/images/hero-fallback.jpg" // Fallback image for mobile
          >
            <source src="/assets/videos/hero/b2.mp4" type="video/mp4" />
          </video>
          
          {/* Content area - Responsive text and spacing */}
          <div className="flex-1 relative z-[24] text-[var(--color-secondary)] p-4 sm:p-6 md:p-8 max-w-full lg:max-w-[1130px] flex flex-col justify-center min-h-full">
            
            {/* Main heading - Responsive typography */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-bold mb-2 sm:mb-2.5 text-[var(--color-secondary)] leading-tight">
              Rana Interior.
            </h1>
            
            {/* Subtitle - Responsive text size and spacing */}
            <p className="font-syne text-lg sm:text-xl md:text-2xl lg:text-[1.8rem] xl:text-[2rem] font-medium leading-tight text-[var(--color-secondary)] max-w-full sm:max-w-[500px] md:max-w-[600px] mb-6 sm:mb-7 md:mb-8">
              Every Design Crafted with Love and Thoughtful Ingredients
            </p>
            
            {/* CTA Button - Responsive sizing */}
            <div className="flex justify-start">
              <Button 
                variant="hero" 
                icon 
                onClick={openQuoteForm}
                className="text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Modal - Responsive modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/70 z- flex justify-center items-center p-4">
          <div className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-[500px] h-[90%] sm:h-[85%] md:h-[80%]">
            
            {/* Close button - Responsive positioning */}
            <button
              onClick={closeQuoteForm}
              className="absolute -top-2 -right-2 sm:top-2.5 sm:right-2.5 bg-gray-300 hover:bg-gray-400 border-none w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full text-lg sm:text-xl cursor-pointer flex justify-center items-center z- transition-all duration-300 hover:scale-110"
            >
              ×
            </button>
            
            {/* Mobile-optimized quote form */}
            <div className="w-full h-full bg-white rounded-[15px] md:rounded-[20px] overflow-hidden">
              {/* For mobile, show a React component instead of iframe */}
              <div className="block sm:hidden w-full h-full">
                <MobileQuoteForm onClose={closeQuoteForm} />
              </div>
              
              {/* For tablets and desktop, use iframe */}
              <iframe
                src="/quote-form.html"
                className="hidden sm:block w-full h-full border-none rounded-[15px] md:rounded-[20px] bg-white"
                title="Quote Request Form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Mobile-optimized quote form component
const MobileQuoteForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    onClose()
  }

  return (
    <div className="p-4 sm:p-6 h-full overflow-y-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
        Design for Every Budget
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Property Location"
          required
          rows={2}
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
        />
        
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Budget"
          min="5000"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors"
        />
        
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Leave your message (optional)"
          rows={2}
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
        />
        
        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-[var(--color-accent)] text-white rounded-lg font-medium text-sm sm:text-base hover:bg-blue-600 transition-colors duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  )
}

export default HeroSection
