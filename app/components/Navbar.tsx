'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/casino', label: 'Casino' },
  { href: '/cruises', label: 'Cruises' },
  { href: '/yacht', label: 'Yacht' },
  { href: '/car-rental', label: 'Car Rental' },
  { href: '/taxi', label: 'Taxi' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-40 glass-dark">
      <div className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-playfair text-lg font-bold text-[#c9a84c] shrink-0">
          Goa Elite Experience
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors font-medium ${
                pathname === l.href
                  ? 'text-[#c9a84c]'
                  : 'text-gray-300 hover:text-[#c9a84c]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+917774077816"
            className="flex items-center gap-1.5 bg-[#c9a84c] text-black px-4 py-2 
                       rounded-full text-sm font-bold hover:bg-[#e8c97a] transition-all
                       hover:scale-105 shrink-0"
          >
            <Phone size={13} />
            +91 7774077816
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="navbar-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden text-[#c9a84c] p-1"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-[#c9a84c]/20 px-4 py-5 space-y-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors ${
                pathname === l.href ? 'text-[#c9a84c]' : 'text-gray-300 hover:text-[#c9a84c]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+917774077816"
            className="flex items-center gap-2 bg-[#c9a84c] text-black px-4 py-2.5 
                       rounded-full text-sm font-bold w-fit mt-3"
          >
            <Phone size={14} /> Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
