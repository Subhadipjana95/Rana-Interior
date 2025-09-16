import { clsx } from 'clsx'

export function cn(...classes) {
  return clsx(classes)
}

export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
