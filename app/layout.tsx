import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/app/components/WhatsAppFloat'
import SchemaMarkup from '@/app/components/SchemaMarkup'
import Analytics from '@/app/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Goa Elite Experience | Casino, Yacht & Cruise Booking',
    template: '%s | Goa Elite Experience',
  },
  description:
    'Book premium casino packages, luxury yacht rentals, sunset cruises in Goa. Best prices, trusted local experts. Call +91 8084676664',
  keywords: [
    'casino booking goa',
    'luxury yacht goa',
    'sunset cruise goa',
    'boat cruise goa',
    'panjim yacht booking',
    'goa tourism',
  ],
  authors: [{ name: 'Goa Elite Experience' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://goaeliteexperience.com',
    siteName: 'Goa Elite Experience',
    title: 'Goa Elite Experience | Casino, Yacht & Cruise Booking',
    description:
      'Book premium casino packages, luxury yacht rentals, sunset cruises in Goa. Trusted local experts.',
    images: [{ url: '/images/hero-yacht.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Goa Elite Experience | Casino, Yacht & Cruise Booking',
    description: 'Premium casino, yacht & cruise bookings in Goa.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
    >
      <head>
        <SchemaMarkup />
        <Analytics />
      </head>
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
