'use client'

import { Phone, MessageCircle } from 'lucide-react'

type Variant = 'call' | 'whatsapp' | 'book'

interface Props {
  variant: Variant
  label?: React.ReactNode
  className?: string
  id?: string
  plain?: boolean
  hideIcon?: boolean
}

export function scrollAndHighlight(e?: React.MouseEvent) {
  if (e) e.preventDefault()
  const form = document.getElementById('page-booking-form')
  if (!form) {
    window.location.href = '/#page-booking-form'
    return
  }
  form.scrollIntoView({ behavior: 'smooth', block: 'center' })
  // Remove class first (in case already animating), then re-add
  form.classList.remove('form-highlight')
  // Force reflow so re-adding the class restarts the animation
  void form.offsetWidth
  form.classList.add('form-highlight')
  setTimeout(() => form.classList.remove('form-highlight'), 2800)
}

export default function CallToFormButton({
  variant,
  label,
  className = '',
  id,
  plain = false,
  hideIcon = false,
}: Props) {
  const isCall = variant === 'call'
  const isBook = variant === 'book'
  const defaultLabel = isCall ? 'Call Now' : isBook ? 'Book Now →' : 'WhatsApp'

  const baseClass = plain
    ? 'flex items-center gap-2 font-semibold transition-colors cursor-pointer bg-transparent border-0 p-0'
    : isBook
      ? 'flex items-center justify-center bg-[#c9a84c] text-black w-full py-3 rounded-xl font-bold text-sm hover:bg-[#e8c97a] transition-all hover:scale-[1.02]'
      : isCall
        ? 'flex items-center gap-2 bg-[#c9a84c] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e8c97a] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]'
        : 'flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all hover:scale-105'

  return (
    <button
      id={id}
      type="button"
      onClick={scrollAndHighlight}
      className={`${baseClass} ${className}`}
    >
      {hideIcon || isBook ? null : isCall ? <Phone size={15} /> : <MessageCircle size={15} />}
      {label ?? defaultLabel}
    </button>
  )
}
