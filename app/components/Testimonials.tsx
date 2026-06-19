import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Booked the Casino Pride package through Goa Elite Experience and had an amazing evening! The team got us the best deal and even arranged our transport. Highly recommended!',
    service: 'Casino Booking',
    initials: 'RS',
  },
  {
    name: 'Priya & Vikram',
    location: 'Bangalore',
    rating: 5,
    text: 'We chartered a private yacht for our anniversary and it was truly magical! Sunset on the Arabian Sea with champagne — exceeded all expectations. Thank you so much!',
    service: 'Private Yacht Charter',
    initials: 'PV',
  },
  {
    name: 'Anjali Mehta',
    location: 'Hyderabad',
    rating: 5,
    text: 'The dinner cruise on Mandovi River was spectacular! Great food, live music, beautiful sunset. The team was super responsive on WhatsApp and confirmed everything instantly.',
    service: 'Dinner Cruise',
    initials: 'AM',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#0d0d0d]">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
            Happy Clients
          </p>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-white">
            What Our Guests Say
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass rounded-2xl p-6 flex flex-col gap-4 hover:border-[#c9a84c]/40 transition-colors">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center 
                               text-black font-bold text-sm shrink-0"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.location} · {t.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-[#c9a84c] fill-[#c9a84c]" />
              ))}
            </div>
            <span className="text-white font-bold">4.9/5</span>
            <span className="text-gray-400 text-sm">based on 127+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
