import React from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '../../../utils/constants'

const ContactInfo = () => {
  return (
    <div className="contact-info space-y-6">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Get in Touch
      </h3>
      
      <div className="contact-details space-y-4">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-yellow-300 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">Call Us</p>
            <p className="text-gray-200 text-sm">
              {CONTACT_INFO.phone} / {CONTACT_INFO.altPhone}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-yellow-300 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">Email</p>
            <p className="text-gray-200 text-sm">
              {CONTACT_INFO.email}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-yellow-300 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">Address</p>
            <p className="text-gray-200 text-sm">
              {CONTACT_INFO.address}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-yellow-300 flex-shrink-0" />
          <div>
            <p className="text-white font-medium">Working Hours</p>
            <p className="text-gray-200 text-sm">
              Mon - Fri: 9:00 AM - 10:00 PM
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium text-white mb-3">
          Why Choose Us?
        </h4>
        <ul className="space-y-2 text-sm text-gray-200">
          <li>• 15+ Years of Experience</li>
          <li>• Free Consultation & Design</li>
          <li>• Affordable Pricing</li>
          <li>• Quality Materials</li>
          <li>• Timely Delivery</li>
        </ul>
      </div>
    </div>
  )
}

export default ContactInfo
