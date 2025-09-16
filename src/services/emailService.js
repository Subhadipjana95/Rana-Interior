import emailjs from 'emailjs-com'
import { EMAILJS_CONFIG } from '../utils/constants'

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.userId)

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      formData,
      EMAILJS_CONFIG.userId
    )
    return { success: true, response }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error }
  }
}

export const sendFormEmail = async (form) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      form,
      EMAILJS_CONFIG.userId
    )
    return { success: true, response }
  } catch (error) {
    console.error('Form email sending failed:', error)
    return { success: false, error }
  }
}
