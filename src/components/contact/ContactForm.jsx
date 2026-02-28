import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch(() => alert('Something went wrong. Please try again.'))
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">&#9993;</div>
        <h3 className="font-heading text-xl font-semibold text-espresso mb-2">Message Sent!</h3>
        <p className="text-coffee-500">Thank you for reaching out. We'll get back to you soon.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-coffee-600 underline hover:text-coffee-800 text-sm"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 rounded-lg border border-coffee-200 focus:border-coffee-400 focus:ring-2 focus:ring-coffee-200 outline-none transition-colors bg-coffee-800 resize-y"
        />
      </div>

      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  )
}
