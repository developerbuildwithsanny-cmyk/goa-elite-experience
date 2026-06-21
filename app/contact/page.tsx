import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import { Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: pageSEO.contact.title,
  description: pageSEO.contact.description,
  keywords: pageSEO.contact.keywords,
}

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container-xl text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="gold-text-gradient">Goa Elite Experience</span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Have a question or ready to book? Reach us via WhatsApp, call, or the form below. We respond within 30 minutes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <BookingForm />
            <div className="space-y-6">
              <div className="glass-dark rounded-2xl p-7 border border-[#c9a84c]/20">
                <h2 className="font-playfair text-2xl font-bold text-[#c9a84c] mb-5">Contact Details</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Phone</p>
                      <a href="tel:+918084676664" className="text-white font-semibold hover:text-[#c9a84c] transition-colors">+91 8084676664</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-black" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">WhatsApp</p>
                      <a href="https://wa.me/918084676664" target="_blank" className="text-white font-semibold hover:text-[#c9a84c] transition-colors">Chat on WhatsApp</a>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-gray-300">
                    <p className="mb-1"><span className="text-[#c9a84c]">📍</span> Panjim, Goa — 403001</p>
                    <p><span className="text-[#c9a84c]">🕐</span> Mon–Sun: 9:00 AM to 10:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="glass-dark rounded-2xl overflow-hidden border border-[#c9a84c]/20">
                <iframe
                  title="Goa Elite Experience Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.8!2d73.8278!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanjim%2C+Goa!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="280"
                  style={{ border: 0 }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
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
