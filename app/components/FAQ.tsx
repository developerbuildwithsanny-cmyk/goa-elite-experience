'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

export default function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container-xl max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-dark rounded-xl overflow-hidden"
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left 
                           hover:bg-white/5 transition-colors group"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-white group-hover:text-[#c9a84c] transition-colors pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#c9a84c] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
