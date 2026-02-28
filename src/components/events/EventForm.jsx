import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function EventForm({ event, onSubmit, onCancel }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (event) {
      setTitle(event.title || '')
      setDate(event.date || '')
      setDescription(event.description || '')
    }
  }, [event])

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await onSubmit({ ...(event || {}), title, date, description })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="event-title" className="block text-sm font-medium text-coffee-700 mb-1">Title</label>
        <input
          type="text"
          id="event-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800"
        />
      </div>

      <div>
        <label htmlFor="event-date" className="block text-sm font-medium text-coffee-700 mb-1">Date</label>
        <input
          type="date"
          id="event-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800"
        />
      </div>

      <div>
        <label htmlFor="event-description" className="block text-sm font-medium text-coffee-700 mb-1">Description</label>
        <textarea
          id="event-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800 resize-y"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : event ? 'Update Event' : 'Create Event'}
        </Button>
        {onCancel && (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}
