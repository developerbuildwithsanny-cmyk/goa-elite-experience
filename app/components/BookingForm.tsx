'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, Loader2, MessageCircle } from 'lucide-react'
import { SERVICES } from '@/app/types'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  alt_phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid number')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const WHATSAPP_NUMBER = '917774077816'

function formatWhatsAppMessage(data: FormData): string {
  return encodeURIComponent(
    `Hello Goa Elite Experience! 🌴\n\n` +
      `New Inquiry from Website:\n` +
      `━━━━━━━━━━━━━━━━━\n` +
      `👤 Name: ${data.name}\n` +
      `📱 Phone: ${data.phone}\n` +
      (data.alt_phone ? `📱 Alt: ${data.alt_phone}\n` : '') +
      `🎯 Service: ${data.service}\n` +
      (data.message ? `💬 Message: ${data.message}\n` : '') +
      `━━━━━━━━━━━━━━━━━\n` +
      `Please confirm availability.`
  )
}

interface BookingFormProps {
  compact?: boolean
  preselectedService?: string
  className?: string
}

export default function BookingForm({
  compact = false,
  preselectedService,
  className = '',
}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: preselectedService ?? '' },
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      // Try to save to DB (non-blocking — WhatsApp always opens)
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            source: 'website_form',
            status: 'new',
          }),
        })
        if (!res.ok) console.warn('Lead save failed (non-blocking):', await res.text())
      } catch (dbErr) {
        console.warn('Lead DB error (non-blocking):', dbErr)
      }

      // Always open WhatsApp
      const msg = formatWhatsAppMessage(data)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
      setSubmitted(true)
      reset()
    } catch {
      // Final fallback
      const msg = formatWhatsAppMessage(data)
      window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        className={`glass-dark rounded-2xl p-8 text-center ${className}`}
      >
        <CheckCircle className="text-green-400 mx-auto mb-4" size={52} />
        <h3 className="font-playfair text-xl font-bold text-[#c9a84c] mb-2">
          Inquiry Sent! 🎉
        </h3>
        <p className="text-gray-300 text-sm mb-4">
          WhatsApp has opened with your details. We'll confirm within 30 minutes!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[#c9a84c] text-sm underline underline-offset-2 hover:text-[#e8c97a]"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <div className={`glass-dark rounded-2xl p-6 lg:p-8 ${className}`}>
      <h3 className="font-playfair text-2xl font-bold text-[#c9a84c] mb-1">
        Book Your Goa Experience
      </h3>
      <p className="text-gray-400 text-sm mb-6">
        Free consultation. No advance payment needed.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <input
            {...register('name')}
            id="booking-name"
            placeholder="Your Full Name *"
            className="input-dark"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              {...register('phone')}
              id="booking-phone"
              placeholder="Mobile Number *"
              maxLength={10}
              inputMode="numeric"
              className="input-dark"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <input
              {...register('alt_phone')}
              id="booking-alt-phone"
              placeholder="Alternate Number"
              maxLength={10}
              inputMode="numeric"
              className="input-dark"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <select
            {...register('service')}
            id="booking-service"
            className="select-dark"
          >
            <option value="">Select Service *</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Message (hidden in compact mode) */}
        {!compact && (
          <textarea
            {...register('message')}
            id="booking-message"
            rows={3}
            placeholder="Tell us more (dates, group size, budget…)"
            className="input-dark resize-none"
          />
        )}

        <button
          type="submit"
          id="booking-submit"
          disabled={loading}
          className="w-full gold-gradient text-black font-bold py-4 rounded-xl 
                     transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(201,168,76,0.4)]
                     disabled:opacity-60 disabled:cursor-not-allowed
                     flex items-center justify-center gap-2 text-base"
        >
          {loading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <MessageCircle size={20} />
          )}
          {loading ? 'Submitting…' : 'Get Instant Quote on WhatsApp →'}
        </button>

        <p className="text-center text-gray-500 text-xs">
          🔒 Your details are safe. We never spam.
        </p>
      </form>
    </div>
  )
}
