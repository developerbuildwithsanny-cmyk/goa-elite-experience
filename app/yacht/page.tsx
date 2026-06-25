import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import FAQ from '@/app/components/FAQ'
import FleetGallery from '@/app/components/FleetGallery'
import Image from 'next/image'
import { CheckCircle, Cake, Heart, Briefcase, Anchor } from 'lucide-react'
import Link from 'next/link'
import CallToFormButton from '@/app/components/CallToFormButton'

export const metadata: Metadata = {
  title: pageSEO.yacht.title,
  description: pageSEO.yacht.description,
  keywords: pageSEO.yacht.keywords,
}

const occasions = [
  {
    icon: Cake,
    title: 'Birthday Party',
    desc: 'Make your special day unforgettable with a private yacht, custom decorations, cake, and your favourite people.',
    service: 'Birthday Party Yacht',
  },
  {
    icon: Heart,
    title: 'Romantic Proposal',
    desc: 'A private sunset proposal on the Arabian Sea — champagne, roses, and a moment you\'ll never forget.',
    service: 'Proposal Yacht',
  },
  {
    icon: Briefcase,
    title: 'Corporate Event',
    desc: 'Team building, client entertainment, or board retreats — our yachts offer a premium setting for business.',
    service: 'Corporate Yacht',
  },
  {
    icon: Anchor,
    title: 'Private Charter',
    desc: 'Just you and your group — island hopping, dolphin watching, sunbathing, or fishing trips.',
    service: 'Private Yacht Charter',
  },
]

const yachtPackages = [
  {
    name: 'Standard Yacht',
    capacity: 'Up to 10 guests',
    price: '₹8,000',
    per: 'per hour',
    image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=1200',
    includes: ['Dedicated captain & crew', 'Welcome drinks', 'Snacks platter', 'Safety equipment', 'Bluetooth music system'],
  },
  {
    name: 'Luxury Yacht',
    capacity: 'Up to 20 guests',
    price: '₹15,000',
    per: 'per hour',
    image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&q=80&w=1200',
    includes: ['Experienced crew', 'Welcome champagne', 'Premium snacks & starters', 'Decoration (on request)', 'Bluetooth music', 'Fishing gear available'],
  },
  {
    name: 'Mega Yacht',
    capacity: 'Up to 40 guests',
    price: '₹25,000',
    per: 'per hour',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=1200',
    includes: ['Full crew team', 'Customizable menu', 'Full decoration setup', 'Live DJ (on request)', 'Dolphin spotting route', 'Photography assistance'],
  },
]

const yachtFAQ = [
  { question: 'How far in advance should I book a yacht?', answer: 'We recommend booking at least 2–3 days in advance, especially on weekends. For special occasions like proposals or large group events, 5–7 days notice ensures full customization.' },
  { question: 'Do you provide food and decoration on the yacht?', answer: 'Yes! We offer custom food setups (from snacks to full catered meals), cake arrangements, flower decorations, balloon setups, and more. Tell us your vision and we\'ll make it happen.' },
  { question: 'What is the minimum booking duration?', answer: 'Minimum yacht charter duration is 2 hours. Most guests book for 3–4 hours for a complete experience including dolphin spotting and island exploration.' },
  { question: 'Can we go dolphin watching on the yacht?', answer: 'Absolutely! Dolphin watching is one of the most popular activities on our yacht charters. We know the best spots in the Arabian Sea and usually guarantee sightings in the morning hours.' },
  { question: 'Is swimming allowed from the yacht?', answer: 'Yes, swimming and snorkeling are allowed at designated safe spots. We provide life jackets and safety equipment. Our crew ensures all guests\' safety throughout.' },
  { question: 'What happens in case of bad weather?', answer: 'Guest safety is our top priority. If weather conditions are unsafe, we will reschedule your charter to the next available date at no extra cost, or offer a full refund.' },
]

export default function YachtPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1600" alt="Luxury Yacht Goa" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
        </div>
        <div className="relative z-10 container-xl py-20">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]" /> Private Yacht Charter Goa
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Luxury Private{' '}
            <span className="gold-text-gradient">Yacht Charters</span>{' '}
            in Goa
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Birthday parties · Proposals · Corporate events · Island hopping · Dolphin watching. Fully customizable experiences on the Arabian Sea.
          </p>
          <div className="flex gap-4 flex-wrap">
            <CallToFormButton variant="call" label="Call to Book" id="yacht-call-btn" />
            <CallToFormButton variant="whatsapp" id="yacht-wa-btn" />
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Perfect For</p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">Every Special Occasion</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {occasions.map((o) => {
              const Icon = o.icon
              return (
                <div key={o.title} className="glass-dark rounded-2xl p-6 text-center border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-black" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-[#c9a84c] mb-2">{o.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{o.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">Yacht Packages</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {yachtPackages.map((pkg) => (
              <div key={pkg.name} className="glass-dark rounded-2xl overflow-hidden border border-[#c9a84c]/20 hover:border-[#c9a84c]/60 transition-colors flex flex-col group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-playfair text-2xl font-bold text-white">{pkg.name}</h3>
                  <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-[#c9a84c]/50 text-[#c9a84c] text-xs font-bold px-3 py-1.5 rounded-full">
                    👥 {pkg.capacity}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-6">
                    <span className="font-playfair text-3xl font-bold text-[#c9a84c]">{pkg.price}</span>
                    <span className="text-gray-400 text-sm ml-2">{pkg.per}</span>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle size={14} className="text-[#c9a84c] shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                  <CallToFormButton
                    variant="book"
                    id={`yacht-book-${pkg.name.toLowerCase().replace(/ /g, '-')}`}
                    label={`Enquire About ${pkg.name} →`}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">
            * Minimum 2 hours booking. Food packages, decorations & custom activities available at extra cost. Contact us for tailored quotes.
          </p>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Real Boats, Real Experiences
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">Our Fleet</h2>
            <div className="gold-divider mt-4" />
            <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
              Browse our actual fleet of luxury yachts and boats. Every photo is from a real charter — click any boat to explore the full gallery.
            </p>
          </div>
          <FleetGallery />
        </div>
      </section>

      <FAQ items={yachtFAQ} title="Yacht Charter FAQs" />

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold">Book Your Yacht</h2>
          </div>
          <BookingForm preselectedService="Private Yacht Charter" />
        </div>
      </section>

    </>
  )
}
