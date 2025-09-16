import React from 'react'
import { CONTACT_INFO, SOCIAL_LINKS } from '../../../utils/constants'

const Footer = () => {
  return (
    <footer className="footer p-0 bg-[var(--color-accent)] flex-1 max-w-[500px] rounded-lg">
      <div className="connect-section text-left text-[var(--color-background)] p-8">
        <h2 className="text-[2.2rem] mb-5 text-[var(--color-background)]">
          Connect with Us
        </h2>
        
        <div className="contact-info mb-8">
          <p className="my-2 text-[var(--color-background)] text-2xl">
            {CONTACT_INFO.name}
          </p>
          <p className="my-2 text-[var(--color-background)] text-2xl font-mono">
            {CONTACT_INFO.email}
          </p>
          <p className="my-2 text-[var(--color-background)] text-2xl font-mono">
            {CONTACT_INFO.phone}/ {CONTACT_INFO.altPhone}
          </p>
        </div>
        
        <div className="qr-code mb-8">
          <img 
            src="/assets/images/social/qr.png"
            alt="Connect QR Code"
            className="w-[200px] h-[200px] mb-4 rounded-lg border border-black"
          />
          <p className="text-sm text-[var(--color-background)]">
            CONNECT WITH US
          </p>
        </div>
        
        <div className="social-links flex justify-start gap-4 mt-2.5">
          <a href={SOCIAL_LINKS.facebook} className="social-icon bg-[#1a1a4b] rounded-full w-10 h-10 flex justify-center items-center transition-transform hover:scale-110">
            <img 
              src="/assets/images/social/facebook.png"
              alt="Facebook"
              className="w-5 h-5 brightness-0 invert"
            />
          </a>
          <a href={SOCIAL_LINKS.instagram} className="social-icon bg-[#1a1a4b] rounded-full w-10 h-10 flex justify-center items-center transition-transform hover:scale-110">
            <img 
              src="/assets/images/social/insta.png"
              alt="Instagram"
              className="w-5 h-5 brightness-0 invert"
            />
          </a>
          <a href={SOCIAL_LINKS.twitter} className="social-icon bg-[#1a1a4b] rounded-full w-10 h-10 flex justify-center items-center transition-transform hover:scale-110">
            <img 
              src="/assets/images/social/x.png"
              alt="Twitter"
              className="w-5 h-5 brightness-0 invert"
            />
          </a>
          <a href={SOCIAL_LINKS.threads} className="social-icon bg-[#1a1a4b] rounded-full w-10 h-10 flex justify-center items-center transition-transform hover:scale-110">
            <img 
              src="/assets/images/social/threads.png"
              alt="Threads"
              className="w-5 h-5 brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
