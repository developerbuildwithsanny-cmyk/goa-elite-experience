import type { Metadata } from 'next'
import { pageSEO } from '@/app/lib/seo'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: pageSEO.blog.title,
  description: pageSEO.blog.description,
  keywords: pageSEO.blog.keywords,
}

const posts = [
  {
    slug: 'best-casino-packages-goa',
    title: 'Best Casino Packages in Goa 2024 — Casino Pride vs Deltin Royale vs Big Daddy',
    excerpt: 'Planning to visit a Goa casino? Here\'s a detailed comparison of the top three floating casinos — packages, prices, games, and what to expect.',
    category: 'Casino',
    date: '2024-12-01',
    readTime: '6 min read',
    image: '/images/casino-interior.jpg',
  },
  {
    slug: 'mandovi-river-cruise-guide',
    title: 'Complete Guide to Mandovi River Cruises in Goa — What to Expect',
    excerpt: 'Everything you need to know about Goa\'s famous Mandovi River cruises — types, timings, prices, what\'s included, and tips for the best experience.',
    category: 'Cruises',
    date: '2024-11-15',
    readTime: '5 min read',
    image: '/images/cruise-mandovi.jpg',
  },
  {
    slug: 'luxury-yacht-charter-goa',
    title: 'How to Plan a Private Luxury Yacht Charter in Goa — Complete Guide',
    excerpt: 'Dreaming of a private yacht experience in Goa? From birthday parties to romantic proposals — here\'s everything you need to plan the perfect yacht charter.',
    category: 'Yacht',
    date: '2024-11-01',
    readTime: '7 min read',
    image: '/images/yacht-deck.jpg',
  },
]

const categoryColor: Record<string, string> = {
  Casino: 'bg-yellow-900 text-yellow-300',
  Cruises: 'bg-blue-900 text-blue-300',
  Yacht: 'bg-purple-900 text-purple-300',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="container-xl text-center">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.25em] uppercase mb-4">Travel Tips & Guides</p>
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-4">
            Goa <span className="gold-text-gradient">Travel Blog</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Expert tips, guides, and reviews from Goa's local travel experts. Plan your perfect trip.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#0d0d0d]">
        <div className="container-xl">
          <div className="grid md:grid-cols-3 gap-7">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass rounded-2xl overflow-hidden group hover:border-[#c9a84c]/50 
                           transition-all duration-300 hover:-translate-y-1 
                           hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)]"
              >
                <div
                  className="h-52 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor[post.category]}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-gray-500 text-xs mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  </div>
                  <h2 className="font-playfair text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-[#c9a84c] text-sm font-semibold flex items-center gap-1">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#c9a84c]/20 py-8">
        <div className="container-xl text-center text-gray-500 text-sm">
          <Link href="/" className="text-[#c9a84c] hover:text-[#e8c97a]">← Back to Home</Link>
          <span className="mx-3">·</span> © {new Date().getFullYear()} Goa Elite Experience
        </div>
      </footer>
    </>
  )
}
