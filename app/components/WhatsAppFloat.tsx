'use client'

import { MessageCircle } from 'lucide-react'
import { scrollAndHighlight } from './CallToFormButton'

export default function WhatsAppFloat() {
  return (
    <button
      id="whatsapp-float"
      onClick={scrollAndHighlight}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 
                 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl 
                 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]
                 animate-pulse-gold"
      style={{
        boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
      }}
    >
      <MessageCircle size={22} fill="white" />
      <span className="font-semibold text-sm hidden sm:block">WhatsApp Us</span>
    </button>
  )
}
