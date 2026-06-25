import Link from 'next/link'
import CallToFormButton from './CallToFormButton'

const serviceLinks: [string, string][] = [
  ['Home', '/'],
  ['Casino Booking', '/casino'],
  ['Boat Cruises', '/cruises'],
  ['Luxury Yacht', '/yacht'],
  ['Car Rental', '/car-rental'],
  ['Taxi Service', '/taxi'],
]

const quickLinks: [string, string][] = [
  ['Blog', '/blog'],
  ['Contact Us', '/contact'],
  ['Casino FAQs', '/casino#faq'],
  ['Cruise FAQs', '/cruises#faq'],
  ['Yacht FAQs', '/yacht#faq'],
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#c9a84c]/25 pt-14 pb-8">
      <div className="container-xl">

        {/* 5-column grid: brand spans 2, each link column spans 1 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start mb-12">

          {/* Brand + description — 2 columns wide */}
          <div className="md:col-span-2">
            <h4 className="font-playfair text-[#c9a84c] font-bold text-xl mb-4">
              Goa Elite Experience
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-sm">
              A trusted booking platform connecting travelers with verified casino, cruise, and
              yacht operators across Goa — discover and book premium experiences instantly, with
              zero hidden fees and direct support via WhatsApp or call.
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              Serving Panjim · North &amp; South Goa · 3+ Years · 500+ Happy Clients
            </p>
          </div>

          {/* Services — 1 column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Services
            </h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              {serviceLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#c9a84c] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links — 1 column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#c9a84c] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info — 1 column */}
          <div>
            <h5 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h5>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>📞 +91 8084676664</p>
              <p>📍 Panjim, Goa 403001</p>
              <p>🕐 Mon–Sun: 9 AM – 10 PM</p>
              <p className="pt-1">
                <CallToFormButton
                  variant="whatsapp"
                  label="WhatsApp Us &rarr;"
                  plain
                  hideIcon
                  className="text-[#25D366] hover:opacity-80 transition-opacity font-medium"
                />
              </p>
            </div>
          </div>

        </div>

        {/* Copyright row */}
        <div className="border-t border-white/10 pt-6 mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-600 text-xs">
          <span>© {new Date().getFullYear()} Goa Elite Experience. All rights reserved.</span>
          <span className="text-gray-700">Panjim, Goa, India</span>
        </div>

      </div>
    </footer>
  )
}
