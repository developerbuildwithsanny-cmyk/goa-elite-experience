'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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

function scrollAndHighlight() {
  const form = document.getElementById('page-booking-form')
  if (!form) return
  form.scrollIntoView({ behavior: 'smooth', block: 'center' })
  form.classList.remove('form-highlight')
  void form.offsetWidth
  form.classList.add('form-highlight')
  setTimeout(() => form.classList.remove('form-highlight'), 2800)
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  function handleCallClick() {
    // If on home page, scroll to form directly; otherwise navigate home first
    if (pathname === '/') {
      scrollAndHighlight()
    } else {
      router.push('/#page-booking-form')
    }
    setOpen(false)
  }

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
          <button
            id="navbar-call-btn"
            onClick={handleCallClick}
            className="flex items-center gap-1.5 bg-[#c9a84c] text-black px-4 py-2 
                       rounded-full text-sm font-bold hover:bg-[#e8c97a] transition-all
                       hover:scale-105 shrink-0"
          >
            <Phone size={13} /> Call
          </button>
        </div>

        {/* Mobile: Call button + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            id="navbar-mobile-call"
            onClick={handleCallClick}
            aria-label="Call us"
            className="flex items-center gap-1.5 bg-[#c9a84c] text-black px-3 py-1.5 
                       rounded-full text-xs font-bold hover:bg-[#e8c97a] transition-all"
          >
            <Phone size={13} /> Call
          </button>
          <button
            id="navbar-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-[#c9a84c] p-1"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
          <button
            onClick={handleCallClick}
            className="flex items-center gap-2 bg-[#c9a84c] text-black px-4 py-2.5 
                       rounded-full text-sm font-bold w-fit mt-3"
          >
            <Phone size={14} /> Call Now
          </button>
        </div>
      )}
    </nav>
  )
}
