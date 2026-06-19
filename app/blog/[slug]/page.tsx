import Navbar from '@/app/components/Navbar'
import BookingForm from '@/app/components/BookingForm'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const posts: Record<string, {
  title: string
  date: string
  readTime: string
  category: string
  image: string
  content: string
  service: string
}> = {
  'best-casino-packages-goa': {
    title: 'Best Casino Packages in Goa 2024 — Casino Pride vs Deltin Royale vs Big Daddy',
    date: '2024-12-01',
    readTime: '6 min read',
    category: 'Casino',
    image: '/images/casino-interior.jpg',
    service: 'Casino Booking',
    content: `
Goa is home to India's most vibrant casino culture, with three iconic floating casinos dominating the scene: **Casino Pride**, **Deltin Royale**, and **Big Daddy Casino**. Each offers a unique experience — here's everything you need to know before booking.

## Casino Pride — Best Value for Money
**Entry: ₹1,500 per person**

Casino Pride is the most popular choice for first-time casino visitors in Goa. The package includes ₹1,500 worth of casino chips, unlimited buffet dinner, and a complimentary drink.

The gaming floor is well-organized with a mix of classic table games (Roulette, Blackjack, Baccarat) and slot machines. The buffet is spread is generous with both Indian and continental options. The atmosphere is lively without being overwhelming — perfect for beginners.

**Best for:** First-timers, couples, groups seeking value.

## Deltin Royale — Premium Floating Casino
**Entry: ₹2,500 per person**

Deltin Royale is India's largest floating casino and arguably the most prestigious. The ₹2,500 package includes chips, a premium buffet with live counters, two complimentary drinks, live entertainment, and a short cruise experience.

The gaming floor spans multiple levels with over 100+ gaming positions including a dedicated high-roller area. The service is impeccable — you'll feel the difference the moment you step aboard.

**Best for:** Special occasions, high-rollers, those who want the complete Goa casino experience.

## Big Daddy Casino — Budget Friendly
**Entry: ₹1,000 per person**

Big Daddy is ideal for those who want a casino experience without breaking the bank. The ₹1,000 package includes chips, snacks, and one drink. The atmosphere is more casual and the crowd is fun-loving.

**Best for:** Budget-conscious travellers, large groups.

## Our Recommendation
For a first visit, we recommend **Casino Pride** — best value, great atmosphere, and hassle-free booking. For a special occasion, splurge on **Deltin Royale**.

Ready to book? Fill the form below and we'll confirm your casino package within 30 minutes!
    `,
  },
  'mandovi-river-cruise-guide': {
    title: 'Complete Guide to Mandovi River Cruises in Goa — What to Expect',
    date: '2024-11-15',
    readTime: '5 min read',
    category: 'Cruises',
    image: '/images/cruise-mandovi.jpg',
    service: 'Sunset Cruise',
    content: `
The Mandovi River cruises are one of Goa's most beloved experiences — and for good reason. Gliding along the river as the sun sets over the Western Ghats, with live Goan music filling the air and a drink in hand, is truly magical.

## Types of Mandovi River Cruises

### Sunset Cruise (Most Popular)
**Duration:** 1.5 hours | **Price:** ₹799/person

The sunset cruise is the crown jewel of Goa experiences. Departing around 6–7 PM, the cruise catches Goa's famous golden hour — warm orange skies reflecting on the calm river. Includes: welcome drink, Goan snacks, and live folk music with traditional dance performances.

**Tip:** Book weekday slots for a more peaceful experience. Weekends fill up fast!

### Dinner Cruise (Most Luxurious)
**Duration:** 2.5 hours | **Price:** ₹1,499/person

A floating restaurant experience under the stars. Full dinner buffet with Goan, Indian, and continental options. Live music and cultural shows throughout the evening. This is the go-to choice for couples and celebrations.

### Party Cruise (Best for Groups)
**Duration:** 2 hours | **Price:** ₹999/person

DJ music, dance floor on deck, and an unlimited drinks package make this the party choice. Best for friend groups, bachelorette parties, and corporate team outings.

### Family Cruise
**Duration:** 1.5 hours | **Price:** ₹599/person

A calm, family-friendly experience with light Goan music, juice for kids, and comfortable seating. No DJ, no alcohol — pure family fun on the river.

## What to Expect

All cruises depart from **Panjim Jetty** (near the Mandovi River promenade). Arrive 15 minutes early. Casual comfortable attire is fine — no dress code on cruises.

## Booking Tips
1. Book at least 1 day in advance (especially weekends)
2. Mention any special requirements (birthday, anniversary) when booking
3. Carry a light jacket — it can get breezy on the river at night

Book your cruise below — we confirm within 30 minutes!
    `,
  },
  'luxury-yacht-charter-goa': {
    title: 'How to Plan a Private Luxury Yacht Charter in Goa — Complete Guide',
    date: '2024-11-01',
    readTime: '7 min read',
    category: 'Yacht',
    image: '/images/yacht-deck.jpg',
    service: 'Private Yacht Charter',
    content: `
A private yacht charter in Goa is the ultimate luxury experience — the Arabian Sea at your feet, a dedicated crew at your service, and the freedom to create your perfect day on the water.

## What's Included in a Yacht Charter?

A standard yacht charter includes a captain and crew, welcome drinks, snacks, safety equipment, and Bluetooth music. Premium and mega yachts also include custom food setups, decoration, and photography assistance.

## Popular Yacht Experiences

### Dolphin Watching
Head out early morning (7–10 AM) and our crew will navigate to the best dolphin spotting locations off the Goa coast. Dolphin sightings are highly common — we're confident you'll spot them!

### Sunset Sailing
Book for the late afternoon (4–7 PM) for a magical golden hour on the Arabian Sea. Champagne in hand, warm light on the water — absolutely breathtaking.

### Island Hopping
Visit Grand Island or nearby fishing villages. Swim in clear blue waters, snorkel, and explore.

### Private Parties
Our yachts are fully customizable for birthdays, proposals, bachelorette parties, and corporate events. We arrange decoration, custom food, and even live music on request.

## How to Plan Your Charter

**Step 1:** Decide your occasion, group size, and duration (minimum 2 hours)
**Step 2:** Contact us via WhatsApp with your requirements
**Step 3:** We suggest the best yacht and time slot
**Step 4:** Confirm with a small deposit — remaining on the day

## Tips for First-Time Yacht Charterers
- Morning charters offer calmer seas and dolphin sightings
- Book 3–5 days in advance for weekend slots
- Mention any special requirements (food, decoration, music) when booking
- Carry sunscreen, sunglasses, and a light jacket

Ready for your luxury Goa yacht experience? Fill the form below!
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="pt-32 text-center text-gray-400">
          <p>Post not found.</p>
          <Link href="/blog" className="text-[#c9a84c] underline mt-4 block">← Back to Blog</Link>
        </div>
      </>
    )
  }

  // Convert simple markdown-like formatting to HTML
  const formatted = post.content
    .trim()
    .split('\n')
    .map((line) => {
      if (line.startsWith('## ')) return `<h2 class="font-playfair text-2xl font-bold text-[#c9a84c] mt-8 mb-3">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="font-playfair text-xl font-bold text-white mt-6 mb-2">${line.slice(4)}</h3>`
      if (line.startsWith('**') && line.endsWith('**')) {
        const inner = line.slice(2, -2)
        return `<p class="text-[#c9a84c] font-semibold text-sm">${inner}</p>`
      }
      if (line.trim() === '') return '<br/>'
      const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
      return `<p class="text-gray-300 leading-relaxed">${processed}</p>`
    })
    .join('\n')

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 h-72">
        <div className="absolute inset-0 z-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container-xl h-full flex flex-col justify-end pb-8">
          <Link href="/blog" className="text-[#c9a84c] text-sm flex items-center gap-1 mb-4 hover:text-[#e8c97a]">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-xs font-bold px-3 py-1 bg-[#c9a84c] text-black rounded-full w-fit mb-3">
            {post.category}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-xl max-w-3xl">
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime}</span>
          </div>
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-white mb-8 leading-snug">
            {post.title}
          </h1>
          <article
            className="prose-content space-y-2"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-[#c9a84c]/20">
            <h2 className="font-playfair text-2xl font-bold text-center mb-6">Ready to Book?</h2>
            <BookingForm preselectedService={post.service} />
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-8">
        <div className="container-xl text-center text-gray-500 text-sm">
          <Link href="/blog" className="text-[#c9a84c] hover:text-[#e8c97a]">← Back to Blog</Link>
          <span className="mx-3">·</span> © {new Date().getFullYear()} Goa Elite Experience
        </div>
      </footer>
    </>
  )
}
