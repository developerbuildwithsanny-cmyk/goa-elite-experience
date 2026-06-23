'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Images } from 'lucide-react'

/* ── Fleet data ─────────────────────────────────────── */
const fleet = [
  {
    name: 'Black Pearl',
    slug: 'black-pearl',
    hero: '/images/fleet/black-pearl/IMG-20250903-WA0082.jpg',
    images: [
      '/images/fleet/black-pearl/IMG-20250903-WA0082.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0078.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0079.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0080.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0084.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0085.jpg',
      '/images/fleet/black-pearl/IMG-20250903-WA0086.jpg',
    ],
  },
  {
    name: 'Sea Eagle',
    slug: 'sea-eagle',
    hero: '/images/fleet/sea-eagle/IMG-20250903-WA0057(1).jpg',
    images: [
      '/images/fleet/sea-eagle/IMG-20250903-WA0057(1).jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0059(1).jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0053.jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0056.jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0066.jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0067.jpg',
      '/images/fleet/sea-eagle/IMG-20250903-WA0070.jpg',
    ],
  },
  {
    name: 'Desire',
    slug: 'desire',
    hero: '/images/fleet/desire/IMG-20250906-WA0052.jpg',
    images: [
      '/images/fleet/desire/IMG-20250906-WA0052.jpg',
      '/images/fleet/desire/IMG-20250906-WA0043(2).jpg',
      '/images/fleet/desire/IMG-20250906-WA0047.jpg',
      '/images/fleet/desire/IMG-20250903-WA0046.jpg',
      '/images/fleet/desire/IMG-20250903-WA0048.jpg',
      '/images/fleet/desire/IMG-20250903-WA0050.jpg',
      '/images/fleet/desire/IMG-20250906-WA0037.jpg',
    ],
  },
  {
    name: 'Declan',
    slug: 'declan',
    hero: '/images/fleet/declan/IMG-20260402-WA0004.jpg',
    images: [
      '/images/fleet/declan/IMG-20260402-WA0004.jpg',
      '/images/fleet/declan/IMG-20260402-WA0012.jpg',
      '/images/fleet/declan/IMG-20260402-WA0017.jpg',
      '/images/fleet/declan/IMG-20260402-WA0000.jpg',
      '/images/fleet/declan/IMG-20260402-WA0001.jpg',
      '/images/fleet/declan/IMG-20260402-WA0002.jpg',
      '/images/fleet/declan/IMG-20260402-WA0005.jpg',
      '/images/fleet/declan/IMG-20260402-WA0006.jpg',
      '/images/fleet/declan/IMG-20260402-WA0007.jpg',
      '/images/fleet/declan/IMG-20260402-WA0008.jpg',
      '/images/fleet/declan/IMG-20260402-WA0009.jpg',
      '/images/fleet/declan/IMG-20260402-WA0010.jpg',
      '/images/fleet/declan/IMG-20260402-WA0011.jpg',
      '/images/fleet/declan/IMG-20260402-WA0013.jpg',
      '/images/fleet/declan/IMG-20260402-WA0014.jpg',
      '/images/fleet/declan/IMG-20260402-WA0015.jpg',
      '/images/fleet/declan/IMG-20260402-WA0016.jpg',
    ],
  },
  {
    name: 'Ralston 1',
    slug: 'ralston-1',
    hero: '/images/fleet/ralston-1/IMG-20251119-WA0026.jpg',
    images: [
      '/images/fleet/ralston-1/IMG-20251119-WA0026.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0020.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0021.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0022.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0023.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0024.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0025.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0027.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0028.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0029.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0030.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0031.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0034.jpg',
      '/images/fleet/ralston-1/IMG-20251119-WA0035.jpg',
    ],
  },
  {
    name: 'Ralston 2',
    slug: 'ralston-2',
    hero: '/images/fleet/ralston-2/IMG-20260203-WA0011.jpg',
    images: [
      '/images/fleet/ralston-2/IMG-20260203-WA0011.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0005.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0006.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0007.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0008.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0009.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0010.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0012.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0013.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0014.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0015.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0016.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0017.jpg',
      '/images/fleet/ralston-2/IMG-20260203-WA0018.jpg',
    ],
  },
]

/* ── Lightbox ───────────────────────────────────────── */
function Lightbox({
  boat,
  startIndex,
  onClose,
}: {
  boat: (typeof fleet)[0]
  startIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(startIndex)
  const images = boat.images

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Title */}
      <span className="lightbox-title">{boat.name}</span>

      {/* Close */}
      <button className="lightbox-close" onClick={onClose} aria-label="Close gallery">
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        className="lightbox-btn lightbox-btn-prev"
        onClick={(e) => { e.stopPropagation(); prev() }}
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index]}
            alt={`${boat.name} — Photo ${index + 1} of ${images.length}`}
            width={1200}
            height={800}
            className="rounded-lg object-contain max-h-[80vh] w-auto"
            sizes="90vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        className="lightbox-btn lightbox-btn-next"
        onClick={(e) => { e.stopPropagation(); next() }}
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>

      {/* Counter */}
      <span className="lightbox-counter">
        {index + 1} / {images.length}
      </span>
    </motion.div>
  )
}

/* ── Fleet Gallery ──────────────────────────────────── */
export default function FleetGallery() {
  const [activeBoat, setActiveBoat] = useState<(typeof fleet)[0] | null>(null)
  const [startIndex, setStartIndex] = useState(0)

  const openGallery = (boat: (typeof fleet)[0], idx = 0) => {
    setActiveBoat(boat)
    setStartIndex(idx)
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleet.map((boat) => (
          <div
            key={boat.slug}
            className="glass rounded-2xl overflow-hidden group
                       hover:border-[#c9a84c]/50 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.15)]
                       cursor-pointer"
            onClick={() => openGallery(boat)}
          >
            {/* Thumbnail */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={boat.hero}
                alt={`${boat.name} — Luxury yacht in Goa`}
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-110
                           transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Photo count badge */}
              <span className="absolute top-3 right-3 flex items-center gap-1.5
                               bg-black/60 backdrop-blur-sm text-white text-xs
                               font-semibold px-2.5 py-1 rounded-full
                               border border-white/10">
                <Images size={12} />
                {boat.images.length}
              </span>

              {/* Boat name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-playfair text-xl font-bold text-white
                               group-hover:text-[#c9a84c] transition-colors">
                  {boat.name}
                </h3>
              </div>
            </div>

            {/* CTA */}
            <div className="p-4 flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {boat.images.length} photos
              </span>
              <span className="text-[#c9a84c] text-sm font-semibold flex items-center gap-1
                              group-hover:gap-2 transition-all">
                View Gallery <ChevronRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {activeBoat && (
          <Lightbox
            boat={activeBoat}
            startIndex={startIndex}
            onClose={() => setActiveBoat(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
