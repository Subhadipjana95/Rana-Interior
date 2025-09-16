import React from 'react'
import BottomNavigation from './components/layout/Navigation'
import FloatingButtons from './components/layout/FloatingButtons'
import HeroSection from './features/hero/components/HeroSection'
import SkillsSection from './features/skills/components/SkillsSection'
import PortfolioSection from './features/portfolio/components/PortfolioSection'
import ProcessSection from './features/process/components/ProcessSection'
import ServicesSection from './features/services/components/ServicesSection'
import TestimonialsSection from './features/testimonials/components/TestimonialsSection'
import ContactSection from './features/contact/components/ContactSection'
import useScrollNavigation from './hooks/useScrollNavigation'

function App() {
  useScrollNavigation()

  return (
    <>
      {/* React 19 native meta tag support */}
      <title>Rana Interior | Interior Design Services in Kolkata</title>
      
      <BottomNavigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ProcessSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FloatingButtons />
    </>
  )
}

export default App
