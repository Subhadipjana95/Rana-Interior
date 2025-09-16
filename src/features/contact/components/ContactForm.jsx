import React, { useState } from 'react'
import Button from '../../../components/ui/Button'
import Input from '../../../components/ui/Input'
import Textarea from '../../../components/ui/Textarea'
import useEmailJS from '../../../hooks/useEmailJS'

const ContactForm = () => {
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
      alert("Your request has been successfully sent. ✅")
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
      alert("Failed to send email. Please try again later.")
    }
  }

  return (
    <div className="contact-form ml-[100px] flex-1 max-w-[500px] p-10 pb-5 bg-white rounded-[20px] shadow-md">
      <h2 className="text-2xl mb-8 text-center text-[#1a1a1a]">
        Design for Every Budget
      </h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone No"
          required
        />
        
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          required
        />
        
        <Textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Property Location"
          required
        />
        
        <Input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Budget"
          min="5000"
          required
        />
        
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Leave your message (optional)"
          rows="4"
        />
        
        <Button
          type="submit"
          variant="secondary"
          disabled={isLoading}
          className="p-3 bg-[#1a1a1a] text-white border-none rounded-[10px] font-inter text-sm cursor-pointer transition-colors duration-300 hover:bg-[#333] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "GET FREE QUOTE"}
        </Button>
        
        <p className="form-disclaimer text-xs text-gray-600 text-center">
          By submitting this form, you agree to the privacy policy & terms and condition
        </p>
      </form>
      
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
    </div>
  )
}

export default ContactForm
