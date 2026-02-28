import { useEffect } from 'react'
import { siteInfo } from '@/data/siteInfo'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  useEffect(() => { document.title = 'Contact — Cafe Delight' }, [])
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <h3 className="font-heading text-xl font-semibold text-espresso mb-6">Send Us a Message</h3>
          <ContactForm />
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="font-heading text-xl font-semibold text-espresso mb-4">Contact Info</h3>
            <div className="space-y-3 text-coffee-600">
              <p>
                <span className="block text-sm text-coffee-400">Phone</span>
                <a href={`tel:${siteInfo.phone}`} className="hover:text-caramel transition-colors font-medium">
                  {siteInfo.phone}
                </a>
              </p>
              <p>
                <span className="block text-sm text-coffee-400">Email</span>
                <a href={`mailto:${siteInfo.email}`} className="hover:text-caramel transition-colors font-medium">
                  {siteInfo.email}
                </a>
              </p>
              <p>
                <span className="block text-sm text-coffee-400">Address</span>
                <span className="font-medium">{siteInfo.address.full}</span>
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="font-heading text-xl font-semibold text-espresso mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {siteInfo.social.facebook && (
                <a
                  href={siteInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-coffee-600 hover:text-caramel transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              )}
              {siteInfo.social.instagram && (
                <a
                  href={siteInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-coffee-600 hover:text-caramel transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
