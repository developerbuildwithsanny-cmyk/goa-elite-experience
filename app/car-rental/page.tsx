import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import Image from 'next/image'
import { Key, User, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import CallToFormButton from '@/app/components/CallToFormButton'

export const metadata: Metadata = {
  title: pageSEO.carRental.title,
  description: pageSEO.carRental.description,
  keywords: pageSEO.carRental.keywords,
}

const cars = [
  { type: 'Economy', examples: 'Wagon R, Swift, Alto', price: '₹800/day', seats: 5, note: 'Best for budget travel' },
  { type: 'SUV', examples: 'Innova Crysta, Ertiga', price: '₹2,000/day', seats: 7, note: 'Family & group travel' },
  { type: 'Sedan', examples: 'Honda City, Ciaz', price: '₹1,500/day', seats: 5, note: 'Comfortable city travel' },
  { type: 'Luxury SUV', examples: 'Toyota Fortuner, MG Hector', price: '₹4,000/day', seats: 7, note: 'Premium experience' },
]

export default function CarRentalPage() {
  return (
    <>
      <Navbar />

      <section className="relative pt-16 min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/car-rental.jpg" alt="Car Rental Goa" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        </div>
        <div className="relative z-10 container-xl py-20">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]" /> Goa Car Rental
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Rent a Car in Goa —{' '}
            <span className="gold-text-gradient">Self Drive & Chauffeur</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Economy hatchbacks to luxury SUVs. Explore Goa on your own terms. AC vehicles, well-maintained fleet, 24/7 roadside assistance.
          </p>
          <div className="flex gap-4 flex-wrap">
            <CallToFormButton variant="call" label="Call to Book" id="car-call-btn" />
            <CallToFormButton variant="whatsapp" id="car-wa-btn" />
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl font-bold">Our Fleet</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cars.map((c) => (
              <div key={c.type} className="glass-dark rounded-2xl p-6 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors">
                <h3 className="font-playfair text-xl font-bold text-[#c9a84c] mb-1">{c.type}</h3>
                <p className="text-gray-400 text-xs mb-3">{c.examples}</p>
                <p className="font-bold text-2xl text-white mb-1">{c.price}</p>
                <p className="text-gray-500 text-xs mb-4">👥 Up to {c.seats} passengers</p>
                <p className="text-[#c9a84c] text-xs font-semibold">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">Why Rent With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Key, title: 'Self Drive', desc: 'Drive yourself around Goa with a valid DL. Flexible pickup & drop.' },
              { icon: User, title: 'With Chauffeur', desc: 'Relax while our experienced local driver navigates Goa for you.' },
              { icon: MapPin, title: 'Free Delivery', desc: 'Car delivered to your hotel or airport. No extra charges in Panjim.' },
              { icon: Clock, title: '24/7 Support', desc: 'Roadside assistance available round the clock for all rentals.' },
            ].map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold">Book a Car</h2>
          </div>
          <BookingForm preselectedService="Car Rental" />
        </div>
      </section>

    </>
  )
}
