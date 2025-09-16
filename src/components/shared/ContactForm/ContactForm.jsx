import React, { useState } from 'react'
import Button from '../../ui/Button'
import Input from '../../ui/Input'
import Textarea from '../../ui/Textarea'
import useEmailJS from '../../../hooks/useEmailJS'

const ContactForm = ({ 
  title = "Get in Touch",
  buttonText = "Send Message",
  showBudgetField = false,
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    budget: '',
    message: ''
  })

  const { isLoading, error, success, sendEmailForm, resetState } = useEmailJS()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const emailData = {
      name: formData.name,
      telephone: formData.phone,
      email: formData.email,
      address: formData.address,
      budget: formData.budget,
      message: formData.message
    }

    const result = await sendEmailForm(emailData)
    
    if (result.success) {
      alert("Your message has been sent successfully! ✅")
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        budget: '',
        message: ''
      })
      resetState()
    } else {
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className={`contact-form ${className}`}>
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {title}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        
        <Textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Your Address"
          rows={3}
          required
        />
        
        {showBudgetField && (
          <Input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget (Optional)"
            min="5000"
          />
        )}
        
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message (Optional)"
          rows={4}
        />
        
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Sending..." : buttonText}
        </Button>
        
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
      </form>
    </div>
  )
}

export default ContactForm
