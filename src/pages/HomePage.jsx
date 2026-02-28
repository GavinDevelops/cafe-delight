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
        <HoursLocationPreview />

        {!loading && <UpcomingEvents events={events} />}
        {!loading && <PreviousEvents events={events} />}

        {/* CTA */}
        <section className="bg-gradient-to-r from-coffee-600 to-coffee-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Visit?</h2>
          <p className="text-coffee-100 text-lg mb-8 max-w-xl mx-auto">
            Stop by for your favorite drink, grab a bite, or just enjoy the atmosphere. We can't wait to see you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/menu" className="bg-white text-coffee-700 hover:bg-coffee-50">
              Browse the Menu
            </Button>
            <Button to="/location" variant="outline" className="border-white text-white hover:bg-white/10">
              Find Us
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
