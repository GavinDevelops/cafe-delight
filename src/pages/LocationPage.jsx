import { useEffect } from 'react'
import { siteInfo } from '@/data/siteInfo'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

export default function LocationPage() {
  useEffect(() => { document.title = 'Location — Cafe Delight' }, [])
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading title="Find Us" subtitle="Located in the heart of Townsend" />

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h3 className="font-heading text-xl font-semibold text-espresso mb-4">Our Address</h3>
          <address className="not-italic text-coffee-600 space-y-2">
            <p className="text-lg">{siteInfo.address.street}</p>
            <p className="text-lg">{siteInfo.address.city}, {siteInfo.address.state} {siteInfo.address.zip}</p>
          </address>
          <div className="mt-6 space-y-2">
            <p>
              <span className="text-coffee-400 text-sm">Phone: </span>
              <a href={`tel:${siteInfo.phone}`} className="text-coffee-700 hover:text-caramel transition-colors font-medium">
                {siteInfo.phone}
              </a>
            </p>
            <p>
              <span className="text-coffee-400 text-sm">Email: </span>
              <a href={`mailto:${siteInfo.email}`} className="text-coffee-700 hover:text-caramel transition-colors font-medium">
                {siteInfo.email}
              </a>
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${siteInfo.address.mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-2 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors font-medium text-sm"
          >
            Get Directions
          </a>
        </Card>

        <div className="rounded-xl overflow-hidden shadow-sm border border-coffee-100 min-h-[300px]">
          <iframe
            title="Cafe Delight location on Google Maps"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${siteInfo.address.mapsQuery}`}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '300px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
