import React from 'react'
import ContactForm from './ContactForm'
import Footer from './Footer'

const ContactSection = () => {
  return (
    <section id="contact" className="contact py-[100px] bg-[var(--color-accent)]">
      <div className="container flex flex-row-reverse justify-between items-start gap-10 max-w-[1300px] mx-auto text-white text-[1.8rem] px-10">
        <ContactForm />
        <Footer />
      </div>
    </section>
  )
}

export default ContactSection
