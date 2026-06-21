'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown } from 'lucide-react'
import BookingForm from './BookingForm'
import Image from 'next/image'

const WA_NUMBER = '918084676664'
const WA_MSG = encodeURIComponent(
  "Hi! I want to book a Goa experience. Please share details."
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-yacht.jpg"
          alt="Luxury Goa Experience — Yacht at Sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
      </div>

      <div className="relative z-10 container-xl pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Copy */}
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]" />
            #1 Trusted Goa Travel Experts
          </p>

          <h1 className="font-playfair text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Experience the Best{' '}
            <span className="gold-text-gradient">Casinos, Cruises</span>{' '}
            &amp; Luxury Yachts in Goa
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Instant Booking · Best Prices · Trusted Local Experts
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="tel:+918084676664"
              id="hero-call-btn"
              className="flex items-center gap-2 bg-[#c9a84c] text-black px-7 py-3.5 
                         rounded-full font-bold text-sm hover:bg-[#e8c97a] 
                         transition-all hover:scale-105 hover:shadow-[0_0_24px_rgba(201,168,76,0.5)]"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              id="hero-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 
                         rounded-full font-bold text-sm hover:bg-[#22c55e] 
                         transition-all hover:scale-105"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 text-sm text-gray-400">
            {[
              '500+ Happy Clients',
              '5★ Rated',
              '3+ Years in Goa',
              'Instant Confirmation',
            ].map((b) => (
              <div key={b} className="flex items-center gap-1.5">
                <span className="text-[#c9a84c] font-bold">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <BookingForm compact />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 
                   text-[#c9a84c] animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
