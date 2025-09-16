import { useState } from 'react'
import { sendEmail, sendFormEmail } from '../services/emailService'

const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const sendEmailForm = async (formData) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const result = await sendEmail(formData)
      
      if (result.success) {
        setSuccess(true)
        return result
      } else {
        setError('Failed to send email. Please try again.')
        return result
      }
    } catch (err) {
      setError('An unexpected error occurred.')
      return { success: false, error: err }
    } finally {
      setIsLoading(false)
    }
  }

  const sendForm = async (formElement) => {
    setIsLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const result = await sendFormEmail(formElement)
      
      if (result.success) {
        setSuccess(true)
        return result
      } else {
        setError('Failed to send email. Please try again.')
        return result
      }
    } catch (err) {
      setError('An unexpected error occurred.')
      return { success: false, error: err }
    } finally {
      setIsLoading(false)
    }
  }

  const resetState = () => {
    setError(null)
    setSuccess(false)
    setIsLoading(false)
  }

  return {
    isLoading,
    error,
    success,
    sendEmailForm,
    sendForm,
    resetState
  }
}

export default useEmailJS
