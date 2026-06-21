'use client'

import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '918084676664'
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in booking a Goa experience. Please share details."
)

export default function WhatsAppFloat() {
  return (
    <a
      id="whatsapp-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
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
    </a>
  )
}
