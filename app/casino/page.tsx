import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import FAQ from '@/app/components/FAQ'
import Image from 'next/image'
import { CheckCircle, Phone, MessageCircle, Clock, Users, Shield, Shirt } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: pageSEO.casino.title,
  description: pageSEO.casino.description,
  keywords: pageSEO.casino.keywords,
}

const packages = [
  {
    name: 'Casino Pride',
    subtitle: 'Floating Casino · Most Popular',
    price: '₹1,500',
    priceNote: 'per person',
    includes: [
      '₹1,500 casino chips',
      'Unlimited buffet dinner',
      '1 complimentary drink',
      'Welcome aboard experience',
      'Dress code: Smart casual',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-[#c9a84c] text-black',
    waMsg: 'I want to book the Casino Pride package. Please share availability and details.',
  },
  {
    name: 'Deltin Royale',
    subtitle: 'Floating Casino · Premium',
    price: '₹2,500',
    priceNote: 'per person',
    includes: [
      '₹2,500 casino chips',
      'Premium buffet dinner',
      '2 complimentary drinks',
      'Cruise experience included',
      'Live entertainment',
      'Dress code: Smart casual',
    ],
    badge: 'Premium',
    badgeColor: 'bg-purple-600 text-white',
    waMsg: 'I want to book the Deltin Royale package. Please share availability and details.',
  },
  {
    name: 'Big Daddy Casino',
    subtitle: 'Floating Casino · Budget Friendly',
    price: '₹1,000',
    priceNote: 'per person',
    includes: [
      '₹1,000 casino chips',
      'Snacks platter',
      '1 complimentary drink',
      'Dress code: Smart casual',
    ],
    badge: 'Budget Friendly',
    badgeColor: 'bg-blue-700 text-white',
    waMsg: 'I want to book the Big Daddy Casino package. Please share availability and details.',
  },
]

const casinoFAQ = [
  {
    question: 'What is the age limit for Goa casinos?',
    answer: 'All Goa casinos require guests to be 21 years or above. Valid government-issued photo ID is mandatory — Aadhaar, PAN card, or passport are accepted.',
  },
  {
    question: 'What should I wear to the casino?',
    answer: 'Smart casual attire is recommended. Shorts, chappals/slippers, and beachwear are not allowed inside the casino premises. Formal or smart casual dress code is enforced.',
  },
  {
    question: 'Is alcohol served inside the casino?',
    answer: 'Yes, casinos serve complimentary drinks as per your package. Additional drinks can be purchased at the bar inside. Goa\'s floating casinos are well-stocked with a wide selection.',
  },
  {
    question: 'What games are available at Goa casinos?',
    answer: 'Popular games include Roulette, Baccarat, Blackjack, Poker (Texas Hold\'em & Flush), Slot Machines, and various Indian card games. Each casino has a different selection of tables.',
  },
  {
    question: 'Do you need to book casino entry in advance?',
    answer: 'While walk-ins are sometimes available, we strongly recommend booking in advance (especially on weekends and holidays) to guarantee your entry and get the best prices.',
  },
  {
    question: 'Are cameras/phones allowed inside casinos?',
    answer: 'Photography is strictly prohibited on the gaming floor. Phones may be allowed in restaurant/lounge areas. Each casino has its own security protocols at the entrance.',
  },
  {
    question: 'Is there a shuttle/transfer to floating casinos?',
    answer: 'Yes! Floating casinos (Casino Pride, Deltin Royale, Big Daddy) are accessible via free shuttle boats from specific jetty points in Panjim. We can arrange transport from your hotel too.',
  },
  {
    question: 'Can you book for groups or corporate events?',
    answer: 'Absolutely! We specialize in group casino bookings (10 to 500+ guests) with special group rates, private gaming areas, and corporate event packages. Contact us for custom pricing.',
  },
]

export default function CasinoPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/casino-interior.jpg"
            alt="Luxury Casino in Goa"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 container-xl py-20">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]" />
            Goa Casino Booking
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Book Premium{' '}
            <span className="gold-text-gradient">Casino Packages</span>{' '}
            in Goa
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Casino Pride · Deltin Royale · Big Daddy Casino — All packages include chips, buffet & drinks. Best prices guaranteed.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="tel:+918084676664" className="flex items-center gap-2 bg-[#c9a84c] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e8c97a] transition-all hover:scale-105">
              <Phone size={15} /> Call to Book
            </a>
            <a href="https://wa.me/918084676664" target="_blank" className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:scale-105">
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Casino Packages */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Our Packages
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">
              Choose Your Casino Experience
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className="glass-dark rounded-2xl p-7 border border-[#c9a84c]/20 hover:border-[#c9a84c]/60 transition-colors relative flex flex-col">
                <span className={`absolute top-4 right-4 ${pkg.badgeColor} text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {pkg.badge}
                </span>
                <div className="mb-5">
                  <h3 className="font-playfair text-2xl font-bold text-[#c9a84c]">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{pkg.subtitle}</p>
                </div>
                <div className="mb-6">
                  <span className="font-playfair text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{pkg.priceNote}</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle size={15} className="text-[#c9a84c] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/918084676664?text=${encodeURIComponent(pkg.waMsg)}`}
                  target="_blank"
                  id={`casino-book-${pkg.name.toLowerCase().replace(/ /g, '-')}`}
                  className="w-full gold-gradient text-black font-bold py-3.5 rounded-xl text-center text-sm hover:opacity-90 transition-all hover:scale-[1.02] block"
                >
                  Book {pkg.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold">What to Expect</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Shirt, title: 'Dress Code', desc: 'Smart casual attire required. No shorts, chappals or beachwear.' },
              { icon: Users, title: 'Age Limit', desc: '21+ with valid government-issued photo ID (Aadhaar, PAN, Passport).' },
              { icon: Clock, title: 'Timings', desc: 'Casinos operate 24/7. Best experience from 7 PM to midnight.' },
              { icon: Shield, title: 'Security', desc: 'Professional security at all casinos. Bags screened at entry.' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-black" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ items={casinoFAQ} title="Casino Booking FAQs" />

      {/* Booking Form */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold">Book Your Casino Package</h2>
            <p className="text-gray-400 mt-2">Fill the form and we'll confirm via WhatsApp within 30 mins.</p>
          </div>
          <BookingForm preselectedService="Casino Booking" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-8">
        <div className="container-xl text-center text-gray-500 text-sm">
          <Link href="/" className="text-[#c9a84c] hover:text-[#e8c97a]">← Back to Home</Link>
          <span className="mx-3">·</span>
          © {new Date().getFullYear()} Goa Elite Experience
        </div>
      </footer>
    </>
  )
}
