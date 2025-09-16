import { CONTACT_INFO, EMAILJS_CONFIG } from '../utils/constants'

// API configuration
export const API_ENDPOINTS = {
  contact: '/api/contact',
  quote: '/api/quote',
  newsletter: '/api/newsletter'
}

// Base API configuration
export const API_CONFIG = {
  baseURL: process.env.VITE_API_BASE_URL || 'https://api.ranainteriors.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

// Generic API request handler
export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.baseURL}${endpoint}`
  
  const config = {
    method: 'GET',
    headers: API_CONFIG.headers,
    ...options
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    console.error('API Request Error:', error)
    return { success: false, error: error.message }
  }
}

// Contact form API
export const submitContactForm = async (formData) => {
  return apiRequest(API_ENDPOINTS.contact, {
    method: 'POST',
    body: JSON.stringify(formData)
  })
}

// Quote request API
export const submitQuoteRequest = async (quoteData) => {
  return apiRequest(API_ENDPOINTS.quote, {
    method: 'POST',
    body: JSON.stringify(quoteData)
  })
}

// Newsletter subscription API
export const subscribeNewsletter = async (email) => {
  return apiRequest(API_ENDPOINTS.newsletter, {
    method: 'POST',
    body: JSON.stringify({ email })
  })
}

// WhatsApp API helper
export const getWhatsAppLink = (message = '') => {
  const defaultMessage = `Hi Rana Interior, I'm interested in your interior design services. I want a FREE CONSULTATION.`
  const encodedMessage = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodedMessage}`
}

// Google Maps link helper
export const getGoogleMapsLink = () => {
  const encodedAddress = encodeURIComponent(CONTACT_INFO.address)
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
}

// Email link helper
export const getEmailLink = (subject = '', body = '') => {
  const defaultSubject = 'Interior Design Inquiry'
  const defaultBody = 'Hello, I am interested in your interior design services.'
  
  const encodedSubject = encodeURIComponent(subject || defaultSubject)
  const encodedBody = encodeURIComponent(body || defaultBody)
  
  return `mailto:${CONTACT_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`
}

// Phone call helper
export const getPhoneLink = (phone = CONTACT_INFO.phone) => {
  return `tel:${phone}`
}

// Social media links
export const getSocialLinks = () => ({
  facebook: `https://www.facebook.com/RanaInterior`,
  instagram: `https://www.instagram.com/RanaInterior`,
  twitter: `https://www.twitter.com/RanaInterior`,
  linkedin: `https://www.linkedin.com/company/rana-interior`
})

// Error handling for API calls
export const handleApiError = (error) => {
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Network error. Please check your connection and try again.'
  }
  
  if (error.message.includes('404')) {
    return 'Service not found. Please try again later.'
  }
  
  if (error.message.includes('500')) {
    return 'Server error. Please try again later.'
  }
  
  return 'An unexpected error occurred. Please try again.'
}

// Rate limiting helper
export const rateLimitRequest = (() => {
  const requests = new Map()
  
  return (key, limit = 5, window = 60000) => { // 5 requests per minute by default
    const now = Date.now()
    const requestTimes = requests.get(key) || []
    
    // Remove old requests outside the time window
    const recentRequests = requestTimes.filter(time => now - time < window)
    
    if (recentRequests.length >= limit) {
      return false // Rate limit exceeded
    }
    
    recentRequests.push(now)
    requests.set(key, recentRequests)
    return true // Request allowed
  }
})()
