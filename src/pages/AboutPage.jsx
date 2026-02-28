import { useEffect } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

export default function AboutPage() {
  useEffect(() => { document.title = 'About — Cafe Delight' }, [])
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SectionHeading title="Our Story" subtitle="A passion for great coffee and community" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-coffee-600 leading-relaxed">
          <p className="animate-fade-up delay-1">
            Cafe Delight was born from a simple idea: that a great cup of coffee can bring a community
            together. Nestled in the heart of Townsend, Delaware, we've been serving our neighbors
            handcrafted beverages and fresh food since we first opened our doors.
          </p>
          <p className="animate-fade-up delay-2">
            Every cup we pour is made with care, using ethically sourced beans roasted to perfection.
            From our signature espresso drinks to our homemade pastries and scoops of creamy ice cream,
            everything on our menu is crafted with love and attention to detail.
          </p>
          <p className="animate-fade-up delay-3">
            But we're more than just a coffee shop — we're a gathering place. Whether you're catching up
            with friends, finding a quiet corner to work, or joining us for one of our live events,
            Cafe Delight is your home away from home.
          </p>
        </div>

        <div className="animate-fade-up delay-4 bg-coffee-100 rounded-xl aspect-[4/5] flex items-center justify-center">
          <div className="text-center text-coffee-400">
            <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium">Cafe Photo</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-coffee-50 rounded-xl p-8 text-center animate-fade-up delay-5 border border-coffee-100">
        <h3 className="font-heading text-2xl font-semibold text-espresso mb-4">Our Mission</h3>
        <p className="text-coffee-600 text-lg max-w-2xl mx-auto leading-relaxed">
          To create a warm, welcoming space where every guest feels at home, every drink is crafted
          with passion, and every visit leaves you smiling.
        </p>
      </div>
    </section>
  )
}
