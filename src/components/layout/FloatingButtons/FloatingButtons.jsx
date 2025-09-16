import React from 'react'
import { Phone } from 'lucide-react'
import { CONTACT_INFO } from '../../../utils/constants'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-[35px] right-[35px] z-[1001] flex flex-col gap-5">
      {/* Call Button */}
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className="w-[50px] h-[50px] bg-blue-400 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone className="w-[30px] h-[30px] text-white" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.phone}?text=Hi%20Rana%20Interior,%20I'm%20interested%20in%20your%20interior%20design%20services.%20I%20want%20a%20FREE%20CONSULTATION.`}
        className="w-[50px] h-[50px] bg-secondary rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img 
          src="/assets/images/social/whatsapp.png" 
          alt="Contact on WhatsApp"
          className="w-[30px] h-[30px]"
        />
      </a>
    </div>
  )
}

export default FloatingButtons
