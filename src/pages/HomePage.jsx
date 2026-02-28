import { useEffect } from 'react'
import { useEvents } from '@/hooks/useEvents'
import HeroSection from '@/components/home/HeroSection'
import HoursLocationPreview from '@/components/home/HoursLocationPreview'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import PreviousEvents from '@/components/home/PreviousEvents'
import Button from '@/components/ui/Button'

export default function HomePage() {
  const { events, loading } = useEvents()
  useEffect(() => { document.title = 'Cafe Delight — Your Neighborhood Coffee Shop' }, [])

  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">
        <div className="animate-fade-up delay-4">
          <HoursLocationPreview />
        </div>

        {!loading && <div className="animate-fade-up delay-5"><UpcomingEvents events={events} /></div>}
        {!loading && <div className="animate-fade-up delay-6"><PreviousEvents events={events} /></div>}

        {/* CTA */}
        <section className="animate-fade-up delay-7 bg-gradient-to-r from-coffee-800 to-coffee-900 rounded-2xl p-8 md:p-12 text-center border border-coffee-100">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-espresso">Ready to Visit?</h2>
          <p className="text-coffee-500 text-lg mb-8 max-w-xl mx-auto">
            Stop by for your favorite drink, grab a bite, or just enjoy the atmosphere. We can't wait to see you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/menu">
              Browse the Menu
            </Button>
            <Button to="/location" variant="outline" className="border-coffee-300 text-espresso hover:bg-coffee-50">
              Find Us
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
