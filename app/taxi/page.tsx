import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import { Phone, MessageCircle, Plane, MapPin, Clock, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: pageSEO.taxi.title,
  description: pageSEO.taxi.description,
  keywords: pageSEO.taxi.keywords,
}

const services = [
  { title: 'Airport Transfer', desc: 'Reliable AC cab pickup & drop at Dabolim (GOI) & Mopa (GOX). Fixed rates, no surprises.', price: 'From ₹800', icon: Plane },
  { title: 'Local Sightseeing', desc: 'Full day & half day packages covering North Goa or South Goa attractions.', price: 'From ₹1,200/day', icon: MapPin },
  { title: 'Outstation Trips', desc: 'Mumbai, Pune, Belgaum & other cities. Comfortable AC cab with experienced driver.', price: 'On Request', icon: Star },
  { title: 'Hourly Rental', desc: 'Flexible hourly cab service for local runs, shopping, or meetings in Goa.', price: 'From ₹300/hr', icon: Clock },
]

export default function TaxiPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container-xl text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4">Goa Taxi Service</p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Reliable Taxi Service in{' '}
            <span className="gold-text-gradient">Goa</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Airport transfers, sightseeing tours, outstation trips & hourly rentals. AC cabs available 24/7 with experienced local drivers.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="tel:+917774077816" className="flex items-center gap-2 bg-[#c9a84c] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e8c97a] transition-all hover:scale-105">
              <Phone size={15} /> Call Now
            </a>
            <a href="https://wa.me/917774077816" target="_blank" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:scale-105">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold">Our Taxi Services</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="glass-dark rounded-2xl p-7 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors flex gap-5">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#c9a84c] mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm mb-2 leading-relaxed">{s.desc}</p>
                    <p className="text-white font-bold text-sm">{s.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold">Book a Taxi</h2>
          </div>
          <BookingForm preselectedService="Taxi / Airport Transfer" />
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-8">
        <div className="container-xl text-center text-gray-500 text-sm">
          <Link href="/" className="text-[#c9a84c] hover:text-[#e8c97a]">← Back to Home</Link>
          <span className="mx-3">·</span> © {new Date().getFullYear()} Goa Elite Experience
        </div>
      </footer>
    </>
  )
}
