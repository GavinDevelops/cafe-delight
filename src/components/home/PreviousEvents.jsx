import { getEventStatus } from '@/utils/dateUtils'
import SectionHeading from '@/components/ui/SectionHeading'
import EventCard from '@/components/events/EventCard'

export default function PreviousEvents({ events }) {
  const past = events
    .filter((e) => getEventStatus(e.date) === 'past')
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6)

  if (past.length === 0) return null

  return (
    <section>
      <SectionHeading title="Past Events" subtitle="A look back at what we've been up to" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {past.map((event) => (
          <EventCard key={event.id} event={event} compact />
        ))}
      </div>
    </section>
  )
}
