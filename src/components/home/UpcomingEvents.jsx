import { getEventStatus } from '@/utils/dateUtils'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/events/EventCard'

export default function UpcomingEvents({ events }) {
  const upcoming = events
    .filter((e) => getEventStatus(e.date) === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))

  if (upcoming.length === 0) return null

  return (
    <section>
      <SectionHeading title="Upcoming Events" subtitle="Join us for something special" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcoming.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}
