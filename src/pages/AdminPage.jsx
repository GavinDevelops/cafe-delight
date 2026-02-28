import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '@/context/AuthContext'
import { useEvents } from '@/hooks/useEvents'
import { createEvent, updateEvent, deleteEvent } from '@/utils/api'
import { formatEventDate, getEventStatus } from '@/utils/dateUtils'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Modal from '@/components/ui/Modal'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import EventForm from '@/components/events/EventForm'

export default function AdminPage() {
  const { token, isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const { events, loading, error, refetch } = useEvents()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)

  if (!isAuthenticated) {
    navigate('/admin/login', { replace: true })
    return null
  }

  async function handleCreate(data) {
    await createEvent(token, data)
    setModalOpen(false)
    refetch()
  }

  async function handleUpdate(data) {
    await updateEvent(token, data)
    setEditingEvent(null)
    refetch()
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this event?')) return
    await deleteEvent(token, id)
    refetch()
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  const sortedEvents = [...events].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-3xl font-bold text-espresso">Event Management</h1>
        <div className="flex gap-3">
          <Button onClick={() => { setEditingEvent(null); setModalOpen(true) }}>
            + New Event
          </Button>
          <Button variant="secondary" onClick={handleLogout}>Log Out</Button>
        </div>
      </div>

      {loading && <LoadingSpinner />}
      {error && (
        <Card className="text-center text-berry">
          <p>Failed to load events: {error}</p>
          <button onClick={refetch} className="mt-2 text-coffee-600 underline text-sm">Retry</button>
        </Card>
      )}

      {!loading && !error && sortedEvents.length === 0 && (
        <Card className="text-center text-coffee-400 py-12">
          <p>No events yet. Create your first event!</p>
        </Card>
      )}

      <div className="space-y-4">
        {sortedEvents.map((event) => {
          const status = getEventStatus(event.date)
          return (
            <Card key={event.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-espresso">{event.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    status === 'upcoming' ? 'bg-mint/30 text-green-800' : 'bg-coffee-100 text-coffee-500'
                  }`}>
                    {status}
                  </span>
                </div>
                <p className="text-sm text-caramel">{formatEventDate(event.date)}</p>
                {event.description && (
                  <p className="text-sm text-coffee-400 mt-1">{event.description}</p>
                )}
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => { setEditingEvent(event); setModalOpen(true) }}
                  className="px-3 py-1.5 text-sm rounded-md bg-coffee-100 text-coffee-700 hover:bg-coffee-200 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="px-3 py-1.5 text-sm rounded-md bg-berry/10 text-berry hover:bg-berry/20 transition-colors"
                >
                  Delete
                </button>
              </div>
            </Card>
          )
        })}
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditingEvent(null) }}
        title={editingEvent ? 'Edit Event' : 'Create Event'}
      >
        <EventForm
          event={editingEvent}
          onSubmit={editingEvent ? handleUpdate : handleCreate}
          onCancel={() => { setModalOpen(false); setEditingEvent(null) }}
        />
      </Modal>
    </section>
  )
}
