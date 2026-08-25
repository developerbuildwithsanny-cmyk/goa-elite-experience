// ============================================================
// Goa Elite Experience — SEO Metadata Function
// Place this in: src/app/layout.tsx  (root-level static metadata)
// AND use pageMeta[page] in each page's generateMetadata() export
// ============================================================

import type { Metadata } from 'next'

const baseURL = 'https://goaeliteexperience.com'

// ─────────────────────────────────────────
// PER-PAGE META (use in each page file)
// ─────────────────────────────────────────
export const pageMeta: Record<string, {
    title: string
    description: string
    keywords: string[]
    url: string
    ogImage?: string
}> = {

    home: {
        title: 'Luxury Yacht Rental Goa | Private Yacht Charter Panjim | Goa Elite Experience',
        description:
            'Book premium casino packages, luxury yacht rentals & sunset cruises in Goa. Trusted local experts in Panjim. Instant WhatsApp confirmation. Best prices guaranteed. Call +91 7823077816.',
        keywords: [
            'goa tourism booking',
            'goa elite experience',
            'casino booking goa',
            'luxury yacht goa',
            'sunset cruise goa',
            'boat cruise goa',
            'panjim yacht booking',
            'goa casino packages',
            'goa cruise booking',
            'goa travel booking',
            'goa trip booking',
            'things to do in goa',
            'goa nightlife booking',
            'best goa experiences',
            'goa water activities',
            'goa holiday packages',
            'goa tourism 2025',
            'goa tour operator panjim',
            'trusted goa travel company',
            'best goa tour operator',
        ],
        url: baseURL,
        ogImage: `${baseURL}/images/og/home.jpg`,
    },

    casino: {
        title: 'Casino Booking in Goa | Casino Pride, Deltin Royale & Big Daddy Packages',
        description:
            'Book casino entry packages in Goa at the best prices. Casino Pride, Deltin Royale & Big Daddy Casino — chips, buffet & drinks included. Instant WhatsApp booking. Call +91 7823077816.',
        keywords: [
            'casino booking goa',
            'goa casino packages',
            'casino pride goa',
            'casino pride entry fee',
            'casino pride packages goa',
            'deltin royale goa',
            'deltin royale packages',
            'deltin royale entry fee',
            'big daddy casino goa',
            'big daddy casino packages',
            'goa casino tickets',
            'online casino booking goa',
            'goa casino entry',
            'best casino in goa',
            'floating casino goa',
            'casino goa price',
            'casino goa 2025',
            'panjim casino booking',
            'mandovi river casino',
            'goa casino night out',
        ],
        url: `${baseURL}/casino`,
        ogImage: `${baseURL}/images/og/casino.jpg`,
    },

    cruises: {
        title: 'Boat Cruise Goa | Sunset Cruise, Dinner Cruise & Party Boat Panjim',
        description:
            'Best boat cruises in Goa on the Mandovi River. Sunset cruise, dinner cruise, party boat, dolphin trip & island adventure cruise. Best prices, instant booking. Call +91 7823077816.',
        keywords: [
            'boat cruise goa',
            'sunset cruise goa',
            'dinner cruise goa',
            'party cruise goa',
            'mandovi river cruise',
            'sunset cruise panjim',
            'goa cruise booking',
            'evening cruise goa',
            'family cruise goa',
            'dolphin watching goa',
            'dolphin trip goa',
            'dolphin trip panjim',
            'island adventure cruise goa',
            'water sports cruise goa',
            'banana boat ride goa',
            'jet ski goa',
            'bumper ride goa',
            'goa river cruise 2025',
            'best cruise in goa',
            'panjim boat trip',
        ],
        url: `${baseURL}/cruises`,
        ogImage: `${baseURL}/images/og/cruises.jpg`,
    },

    yacht: {
        title: 'Luxury Yacht Rental Goa | Private Yacht Charter Panjim | Birthday & Corporate',
        description:
            'Rent a luxury yacht in Goa for private charters, birthday parties, proposals & corporate events. Our fleet: Black Pearl, Sea Eagle, Desire, Declan, Ralston. Hourly packages available.',
        keywords: [
            'luxury yacht rental goa',
            'private yacht goa',
            'yacht charter goa',
            'panjim yacht booking',
            'yacht hire goa',
            'yacht birthday party goa',
            'proposal yacht goa',
            'corporate yacht goa',
            'yacht event goa',
            'private yacht charter panjim',
            'luxury yacht panjim',
            'black pearl yacht goa',
            'sea eagle yacht goa',
            'yacht for rent in goa',
            'goa yacht packages',
            'couple yacht goa',
            'honeymoon yacht goa',
            'premium yacht goa 2025',
            'goa yacht price',
            'boat for hire goa',
        ],
        url: `${baseURL}/yacht`,
        ogImage: `${baseURL}/images/og/yacht.jpg`,
    },

    'car-rental': {
        title: 'Car Rental in Goa | Self Drive & Chauffeur Cars | SUV, Sedan, Luxury',
        description:
            'Rent a car in Goa with or without driver. Hatchbacks, sedans, SUVs & luxury cars available. Airport pickup, hotel transfer & full day rentals. Call +91 7823077816.',
        keywords: [
            'car rental goa',
            'self drive car goa',
            'rent a car goa',
            'car hire goa',
            'car on rent panjim',
            'chauffeur car goa',
            'suv rental goa',
            'sedan rental goa',
            'luxury car rental goa',
            'car rental panjim',
            'airport car rental goa',
            'goa airport pickup car',
            'affordable car rental goa',
            'daily car rental goa',
            'goa car rental 2025',
            'car with driver goa',
            'goa sightseeing car',
            'tempo traveller goa',
            'vehicle on rent goa',
            'car for tour goa',
        ],
        url: `${baseURL}/car-rental`,
        ogImage: `${baseURL}/images/og/car-rental.jpg`,
    },

    taxi: {
        title: 'Taxi in Goa | Airport Transfer, Hotel Pickup & Sightseeing Taxi Panjim',
        description:
            'Book reliable taxi services in Goa for airport pickup, hotel transfer & full-day sightseeing. North Goa & South Goa covered. WhatsApp booking. Call +91 7823077816.',
        keywords: [
            'taxi in goa',
            'goa taxi booking',
            'taxi service goa',
            'goa airport taxi',
            'goa airport pickup',
            'airport transfer goa',
            'hotel transfer goa',
            'taxi panjim',
            'goa sightseeing taxi',
            'north goa taxi',
            'south goa taxi',
            'cab in goa',
            'cab service goa',
            'taxi from goa airport',
            'goa to airport cab',
            'goa taxi rate',
            'goa taxi price',
            'reliable taxi goa',
            'outstation taxi goa',
            'goa cab booking 2025',
        ],
        url: `${baseURL}/taxi`,
        ogImage: `${baseURL}/images/og/taxi.jpg`,
    },

    blog: {
        title: 'Goa Travel Blog | Casino, Yacht, Cruise & Nightlife Tips 2025',
        description:
            'Read expert tips, guides and travel stories about Goa. Best casinos, luxury yachts, sunset cruises, nightlife spots, and hidden experiences in Panjim, North & South Goa.',
        keywords: [
            'goa travel blog',
            'best casinos in goa',
            'top yachts in goa',
            'best sunset cruise goa',
            'goa nightlife guide',
            'things to do in goa',
            'goa travel tips 2025',
            'goa hidden gems',
            'mandovi river guide',
            'panjim travel guide',
            'goa casino guide',
            'goa yacht guide',
            'goa cruise guide',
            'goa holiday tips',
            'north goa vs south goa',
            'goa monsoon travel',
            'goa trip planning',
            'best time to visit goa',
            'goa tourist guide 2025',
            'what to do in goa at night',
        ],
        url: `${baseURL}/blog`,
        ogImage: `${baseURL}/images/og/blog.jpg`,
    },

    contact: {
        title: 'Contact Goa Elite Experience | WhatsApp & Call Booking Panjim Goa',
        description:
            'Get in touch with Goa Elite Experience for casino, yacht, cruise, car rental or taxi bookings. WhatsApp us anytime or call +91 7823077816. Based in Panjim, Goa.',
        keywords: [
            'contact goa elite experience',
            'goa booking contact',
            'panjim tour operator contact',
            'goa travel agent contact',
            'whatsapp goa booking',
            'call goa elite',
            'goa tourism inquiry',
            'book goa experience',
            'goa tour inquiry',
            'goa elite panjim',
        ],
        url: `${baseURL}/contact`,
        ogImage: `${baseURL}/images/og/home.jpg`,
    },
}

// ─────────────────────────────────────────
// generateMetadata FUNCTION (use in each page)
// Example usage in src/app/casino/page.tsx:
//   export const metadata = generatePageMetadata('casino')
// ─────────────────────────────────────────
export function generatePageMetadata(page: keyof typeof pageMeta): Metadata {
    const meta = pageMeta[page]

    if (!meta) {
        return {
            title: 'Page Not Found — Goa Elite Experience',
            description: 'The page you are looking for does not exist.',
            robots: { index: false, follow: false },
        }
    }

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords.join(', '),
        applicationName: 'Goa Elite Experience',
        generator: 'Next.js',
        authors: [{ name: 'Goa Elite Experience', url: baseURL }],
        referrer: 'origin-when-cross-origin',
        robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
        classification: 'Travel & Tourism',
        category: 'Tourism',
        icons: {
            icon: '/favicon.png',
            apple: '/apple-touch-icon.png',
        },
        alternates: {
            canonical: meta.url,
        },
        openGraph: {
            type: 'website',
            locale: 'en_IN',
            url: meta.url,
            title: meta.title,
            description: meta.description,
            siteName: 'Goa Elite Experience',
            images: [
                {
                    url: meta.ogImage || `${baseURL}/images/og/home.jpg`,
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [meta.ogImage || `${baseURL}/images/og/home.jpg`],
        },
        other: {
            'geo.region': 'IN-GA',
            'geo.placename': 'Panjim, Goa',
            'geo.position': '15.4909;73.8278',
            'ICBM': '15.4909, 73.8278',
        },
    }
}

// ─────────────────────────────────────────
// ROOT LAYOUT METADATA (static, for layout.tsx)
// Copy-paste this export into src/app/layout.tsx
// ─────────────────────────────────────────
export const rootMetadata: Metadata = {
    title: {
        default: 'Goa Elite Experience | Casino, Yacht & Cruise Booking',
        template: '%s | Goa Elite Experience',
    },
    description:
        'Book premium casino packages, luxury yacht rentals & sunset cruises in Goa. Trusted local experts in Panjim with 500+ happy clients. Instant WhatsApp booking. Call +91 7823077816.',
    keywords: [
        'goa elite experience',
        'casino booking goa',
        'luxury yacht goa',
        'sunset cruise goa',
        'goa tourism',
        'panjim travel',
        'goa cruise',
        'goa nightlife',
    ].join(', '),
    applicationName: 'Goa Elite Experience',
    authors: [{ name: 'Goa Elite Experience', url: baseURL }],
    robots: { index: true, follow: true },
    icons: {
        icon: '/favicon.png',
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: baseURL,
        siteName: 'Goa Elite Experience',
        images: [
            {
                url: `${baseURL}/images/og/home.jpg`,
                width: 1200,
                height: 630,
                alt: 'Goa Elite Experience — Casino, Yacht & Cruise Booking',
            },
        ],
    },
    verification: {
        // Paste your Google Search Console verification token here once you add the site:
        // google: 'your-google-verification-token',
    },
}