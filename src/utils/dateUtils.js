export function getEventStatus(dateStr) {
  const eventDate = new Date(dateStr + 'T23:59:59')
  return eventDate >= new Date() ? 'upcoming' : 'past'
}

export function formatEventDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getTodayDayName() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' })
}
