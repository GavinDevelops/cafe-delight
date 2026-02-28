import { getEventStatus, formatEventDate } from '@/utils/dateUtils'
import Card from '@/components/ui/Card'

export default function EventCard({ event, compact = false }) {
  const status = getEventStatus(event.date)
  const isUpcoming = status === 'upcoming'

  return (
    <Card className={compact ? 'p-4' : ''}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
          isUpcoming
            ? 'bg-mint/30 text-mint'
            : 'bg-coffee-100 text-coffee-500'
        }`}>
          {isUpcoming ? 'Upcoming' : 'Past'}
        </span>
      </div>
      <h4 className={`font-heading font-semibold text-espresso ${compact ? 'text-lg' : 'text-xl'}`}>
        {event.title}
      </h4>
      <p className="text-caramel text-sm font-medium mt-1">
        {formatEventDate(event.date)}
      </p>
      {event.description && !compact && (
        <p className="text-coffee-500 mt-2 text-sm leading-relaxed">{event.description}</p>
      )}
    </Card>
  )
}
