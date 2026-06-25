import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Testimonials from '@/app/components/Testimonials'
import FAQ from '@/app/components/FAQ'
import BookingForm from '@/app/components/BookingForm'
import { Ship, Anchor, Car, MapPin, Building2, Waves, ArrowRight, Users, Star, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CallToFormButton from '@/app/components/CallToFormButton'

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
}

const services = [
  {
    icon: Building2,
    title: 'Casino Booking',
    description: 'Casino Pride, Deltin Royale & Big Daddy packages with chips, buffet & drinks.',
    href: '/casino',
    badge: 'Most Popular',
  },
  {
    icon: Waves,
    title: 'Sunset Cruise',
    description: 'Magical golden hour cruises on Mandovi River with live music & drinks.',
    href: '/cruises',
    badge: 'Best Seller',
  },
  {
    icon: Ship,
    title: 'Dinner Cruise',
    description: 'Lavish floating dinner with premium cuisine on Mandovi River.',
    href: '/cruises',
    badge: null,
  },
  {
    icon: Anchor,
    title: 'Luxury Yacht',
    description: 'Private yacht charters for birthdays, proposals & corporate events.',
    href: '/yacht',
    badge: 'Premium',
  },
  {
    icon: Car,
    title: 'Car Rental',
    description: 'Self-drive & chauffeur cars — hatchbacks to luxury SUVs.',
    href: '/car-rental',
    badge: null,
  },
  {
    icon: MapPin,
    title: 'Taxi Service',
    description: 'Airport transfers, outstation trips & local sightseeing tours.',
    href: '/taxi',
    badge: null,
  },
]

const experiences = [
  {
    title: 'Casino Pride Package',
    image: '/images/casino-interior.jpg',
    price: '₹1,500',
    includes: '1500 chips + Unlimited Buffet + 1 Drink',
    href: '/casino',
  },
  {
    title: 'Mandovi Sunset Cruise',
    image: '/images/cruise-mandovi.jpg',
    price: '₹799',
    includes: 'Live Music + Drinks + Snacks',
    href: '/cruises',
  },
  {
    title: 'Private Yacht Charter',
    image: '/images/yacht-deck.jpg',
    price: '₹8,000/hr',
    includes: 'Dedicated Crew + Welcome Drinks + Snacks',
    href: '/yacht',
  },
  {
    title: 'Dolphin Watching Trip',
    image: '/images/fleet/sea-eagle/IMG-20250903-WA0057(1).jpg',
    price: '₹400',
    includes: 'Dolphin Sightings + Landmark Views + Kids Below 5 Free',
    href: '/cruises',
  },
]

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
  { icon: Clock, value: '3+ Yrs', label: 'In Business' },
  { icon: Shield, value: '24/7', label: 'Support' },
]

const homeFAQ = [
  {
    question: 'How do I book a casino package in Goa?',
    answer:
      'Simply fill in the inquiry form above, select "Casino Booking" as your service, and submit. We\'ll open WhatsApp instantly with your details and confirm within 30 minutes. No advance payment required to book.',
  },
  {
    question: 'What is included in the sunset cruise?',
    answer:
      'Our sunset cruise on Mandovi River includes live music, welcome drinks, snacks, and a stunning golden hour view. Duration is approximately 1.5 hours departing from Panjim Jetty.',
  },
  {
    question: 'Can I charter a private yacht for a birthday party?',
    answer:
      'Absolutely! We specialize in private yacht charters for birthdays, proposals, anniversary dinners, and corporate events. We customize food, decoration, and activities per your requirement.',
  },
  {
    question: 'Do you provide airport transfer from Dabolim/Mopa?',
    answer:
      'Yes, we provide comfortable AC taxi transfers from both Dabolim (GOI) and Mopa (GOX) airports to all major Goa destinations. Book in advance for guaranteed availability.',
  },
  {
    question: 'Is there a minimum group size for casino bookings?',
    answer:
      'No minimum group size! We handle solo travellers, couples, families, and large corporate groups. Each casino has its own entry requirements — we\'ll guide you through everything.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'We offer flexible cancellations. For cruise and casino bookings, cancellations up to 24 hours before the event are usually fully refundable. For private yacht charters, 48 hours notice is needed. Contact us on WhatsApp for specific terms.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services */}
      <section id="services" className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white">
              Our Premium Services
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link
                  key={s.title}
                  href={s.href}
                  className="glass rounded-2xl p-6 hover:border-[#c9a84c]/50 
                             transition-all duration-300 hover:-translate-y-1 
                             hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)] group relative"
                >
                  {s.badge && (
                    <span className="absolute top-4 right-4 bg-[#c9a84c] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                      {s.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                    <Icon size={22} className="text-black" />
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-white mb-2 group-hover:text-[#c9a84c] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="text-[#c9a84c] text-sm font-semibold flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Experiences */}
      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Top Picks
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">
              Popular Goa Experiences
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <Link
                key={exp.title}
                href={exp.href}
                className="glass rounded-2xl overflow-hidden group hover:border-[#c9a84c]/50 
                           transition-all duration-300 hover:-translate-y-1 
                           hover:shadow-[0_8px_40px_rgba(201,168,76,0.2)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="gold-gradient text-black font-bold text-lg px-3 py-1 rounded-full">
                      {exp.price}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">✓ {exp.includes}</p>
                  <span className="flex items-center gap-1 text-[#c9a84c] font-semibold text-sm">
                    Book Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Why Choose Us */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl">
          <div className="text-center mb-14">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">
              Goa's Most Trusted Experience Partner
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.label}
                  className="glass-dark rounded-2xl p-6 text-center border border-[#c9a84c]/20 
                             hover:border-[#c9a84c]/60 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-black" />
                  </div>
                  <p className="font-playfair text-3xl font-bold text-[#c9a84c]">{s.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                </div>
              )
            })}
          </div>

          <div className="glass-dark rounded-2xl p-8 grid md:grid-cols-3 gap-6 text-center border border-[#c9a84c]/20">
            {[
              { title: 'Instant Confirmation', desc: 'Get booking confirmation via WhatsApp within 30 minutes of inquiry.' },
              { title: 'Best Price Guarantee', desc: 'We match or beat any competitor price for the same package.' },
              { title: 'Local Expertise', desc: '3+ years in Goa — we know every casino, yacht, and cruise in the city.' },
            ].map((f) => (
              <div key={f.title}>
                <div className="gold-divider mb-4" />
                <h3 className="font-playfair text-lg font-bold text-[#c9a84c] mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={homeFAQ} title="Common Questions About Goa Bookings" />

      {/* CTA / Contact */}
      <section className="section-padding pb-20 bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
              Ready to Book?
            </p>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold">
              Plan Your Perfect Goa Trip
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <BookingForm />
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-6 border border-[#c9a84c]/20">
                <h3 className="font-playfair text-xl font-bold text-[#c9a84c] mb-5">
                  Contact Us
                </h3>

                {/* Plain text contact links */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-3">
                    <CallToFormButton
                      variant="call"
                      label="Call Now"
                      plain
                      className="text-[#c9a84c] hover:text-[#e8c97a] text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <CallToFormButton
                      variant="whatsapp"
                      label="WhatsApp Us"
                      plain
                      className="text-[#25D366] hover:opacity-70 text-sm"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="border-t border-white/10 pt-4 space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="text-[#c9a84c]">📍</span> Panjim, Goa — 403001
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#c9a84c]">🕐</span> Mon–Sun: 9 AM to 10 PM
                  </p>
                </div>
              </div>
              <div className="glass-dark rounded-2xl overflow-hidden border border-[#c9a84c]/20">
                <iframe
                  title="Goa Elite Experience Location — Panjim Goa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8!2d73.8278!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanjim%2C+Goa!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
