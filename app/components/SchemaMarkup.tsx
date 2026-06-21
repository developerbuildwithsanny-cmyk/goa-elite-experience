export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristInformationCenter',
    name: 'Goa Elite Experience',
    description:
      'Premium casino booking, luxury yacht rentals, and boat cruises in Goa',
    url: 'https://goaeliteexperience.com',
    telephone: '+91-8084676664',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Panjim',
      addressLocality: 'Panjim',
      addressRegion: 'Goa',
      postalCode: '403001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '15.4909',
      longitude: '73.8278',
    },
    openingHours: 'Mo-Su 09:00-22:00',
    priceRange: '₹₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
    sameAs: ['https://wa.me/918084676664'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
