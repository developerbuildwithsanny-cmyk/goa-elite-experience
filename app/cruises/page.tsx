import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import FAQ from '@/app/components/FAQ'
import Image from 'next/image'
import { CheckCircle, Phone, MessageCircle, Music, Utensils, Sun, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: pageSEO.cruises.title,
  description: pageSEO.cruises.description,
  keywords: pageSEO.cruises.keywords,
}

const cruises = [
  {
    name: 'Sunset Cruise',
    duration: '1.5 Hours',
    price: '₹799',
    per: 'per person',
    desc: 'Watch the golden sun dip below the horizon on Mandovi River with live Goan music, drinks and snacks.',
    includes: ['Welcome drink', 'Goan snacks platter', 'Live folk music & dance', 'Stunning sunset views'],
    badge: 'Best Seller',
    service: 'Sunset Cruise',
  },
  {
    name: 'Dinner Cruise',
    duration: '2.5 Hours',
    price: '₹1,499',
    per: 'per person',
    desc: 'Dine under the stars on a floating restaurant with live entertainment on the scenic Mandovi River.',
    includes: ['Welcome drink', 'Full dinner buffet', 'Live music & cultural show', 'River views', 'Dessert included'],
    badge: 'Most Luxurious',
    service: 'Dinner Cruise',
  },
  {
    name: 'Party Cruise',
    duration: '2 Hours',
    price: '₹999',
    per: 'per person',
    desc: 'DJ music, unlimited drinks and a vibrant party atmosphere on the Mandovi River at night.',
    includes: ['2 complimentary drinks', 'DJ music all night', 'Dance floor on deck', 'Snacks included'],
    badge: 'Party Favorite',
    service: 'Party Cruise',
  },
  {
    name: 'Family Cruise',
    duration: '1.5 Hours',
    price: '₹599',
    per: 'per person',
    desc: 'A calm, family-friendly cruise perfect for all ages with light music, snacks and river views.',
    includes: ['Snacks & juice', 'Light Goan music', 'Kids friendly', 'River & bridge views'],
    badge: null,
    service: 'Family Cruise',
  },
  {
    name: 'Island Adventure Cruise',
    duration: 'Full Day',
    price: '₹2,000',
    per: 'per person',
    desc: 'The ultimate Goan water adventure — an all-day island cruise packed with thrilling activities, great food, and non-stop entertainment on the open sea.',
    includes: [
      'Kayaking & sub-board fun',
      'Jet ski ride',
      'Banana boat & bumper ride',
      'Swimming in open waters',
      'Veg & non-veg buffet lunch',
      '2 complimentary drinks',
      'Live DJ on board',
      'Pickup & drop included',
    ],
    badge: 'Adventure',
    service: 'Island Adventure Cruise',
  },
  {
    name: 'Dolphin Watching Trip',
    duration: '1 Hour',
    price: '₹400',
    per: 'per person',
    desc: "Glide along Goa's scenic coastline on a one-hour dolphin spotting adventure. Watch wild dolphins leap and play while passing iconic landmarks — Reis Magos Fort, Aguada Lighthouse, the historic Aguada Jail, Gurudwara Temple, and Jimmy Palace.",
    includes: [
      'Natural dolphin sightings',
      'Scenic landmark views',
      'Kids below 5 ride free',
      'Weather-dependent (no guarantee)',
    ],
    badge: 'Family Friendly',
    service: 'Dolphin Watching Trip',
  },
]

const cruiseFAQ = [
  {
    question: 'Where do the cruises depart from?',
    answer: 'All Mandovi River cruises depart from the Panjim Jetty (Panaji Ferry Wharf) near the Mandovi River promenade. It is easily accessible from all parts of Panjim.',
  },
  {
    question: 'What is the best time for a sunset cruise in Goa?',
    answer: 'The sunset cruise typically departs between 6:00–7:00 PM, which aligns perfectly with Goa\'s golden hour (6:30–7:30 PM). Timing varies slightly by season — we\'ll confirm your exact departure.',
  },
  {
    question: 'Are children allowed on the cruises?',
    answer: 'Yes! Children are welcome on the sunset, dinner, and family cruises. For party cruises, we recommend it\'s suitable for adults only due to late timings and DJ music atmosphere.',
  },
  {
    question: 'Is alcohol included in all cruise packages?',
    answer: 'The dinner and party cruise packages include drinks. The sunset cruise includes 1 welcome drink. The family cruise provides juice and soft drinks. Additional drinks can be purchased on board.',
  },
  {
    question: 'What happens if the cruise is cancelled due to weather?',
    answer: 'Safety is our priority. If a cruise is cancelled due to bad weather or sea conditions, you will receive a full refund or free rebooking for another date — your choice.',
  },
  {
    question: 'Can I book the entire cruise for a private event?',
    answer: 'Yes! We offer private cruise charters for birthdays, bachelorette parties, corporate events, and wedding celebrations. Minimum group size and pricing depends on the event type — contact us for a quote.',
  },
]

export default function CruisesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cruise-mandovi.jpg" alt="Boat Cruise on Mandovi River Goa" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        </div>
        <div className="relative z-10 container-xl py-20">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]" /> Mandovi River Cruises
          </p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold leading-tight mb-4 max-w-2xl">
            Magical Boat Cruises on{' '}
            <span className="gold-text-gradient">Mandovi River</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Sunset Cruise · Dinner Cruise · Party Cruise · Family Cruise — Live music, drinks & unforgettable views.
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

      {/* Cruise Types */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Choose Your Cruise</p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">Goa Cruise Packages</h2>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cruises.map((c) => (
              <div key={c.name} className="glass-dark rounded-2xl p-7 border border-[#c9a84c]/20 hover:border-[#c9a84c]/50 transition-colors relative">
                {c.badge && (
                  <span className="absolute top-4 right-4 bg-[#c9a84c] text-black text-xs font-bold px-2.5 py-1 rounded-full">{c.badge}</span>
                )}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#c9a84c]">{c.name}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">⏱ {c.duration}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-playfair text-2xl font-bold text-white">{c.price}</span>
                    <p className="text-gray-500 text-xs">{c.per}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{c.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {c.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={13} className="text-[#c9a84c] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/918084676664?text=${encodeURIComponent(`I want to book the ${c.name}. Please share availability and details.`)}`}
                  target="_blank"
                  id={`cruise-book-${c.name.toLowerCase().replace(/ /g, '-')}`}
                  className="block w-full gold-gradient text-black font-bold py-3 rounded-xl text-center text-sm hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  Book {c.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <h2 className="font-playfair text-3xl font-bold text-center mb-10">What's On Board</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Music, title: 'Live Music', desc: 'Traditional Goan folk music and cultural dance performances.' },
              { icon: Utensils, title: 'Food & Drinks', desc: 'Fresh Goan cuisine, snacks, and welcome drinks included.' },
              { icon: Sun, title: 'Scenic Views', desc: 'Stunning Mandovi River sunset and Panjim city skyline.' },
              { icon: Users, title: 'Friendly Staff', desc: 'Trained crew ensures a safe, fun and memorable experience.' },
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

      {/* Sunset Cruise Gallery */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Golden Hour on the Water
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">
              Sunset Cruise — Real Views from Our Fleet
            </h2>
            <div className="gold-divider mt-4" />
            <p className="text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
              These are genuine golden-hour shots from our Sea Eagle yacht on the Mandovi River — no filters, no stock photos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden border border-[#c9a84c]/20
                            hover:border-[#c9a84c]/50 transition-all duration-300
                            hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)]">
              <Image
                src="/images/fleet/sea-eagle/IMG-20250903-WA0057(1).jpg"
                alt="Sea Eagle yacht at sunset with heritage church on Mandovi River"
                width={800}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Sea Eagle · Sunset with Reis Magos Church
              </span>
            </div>
            <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden border border-[#c9a84c]/20
                            hover:border-[#c9a84c]/50 transition-all duration-300
                            hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)]">
              <Image
                src="/images/fleet/sea-eagle/IMG-20250903-WA0053.jpg"
                alt="Sea Eagle yacht deck at golden hour on Mandovi River Goa"
                width={800}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                Sea Eagle · Deck View at Golden Hour
              </span>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={cruiseFAQ} title="Cruise Booking FAQs" />

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl font-bold">Book Your Cruise</h2>
          </div>
          <BookingForm preselectedService="Sunset Cruise" />
        </div>
      </section>

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
