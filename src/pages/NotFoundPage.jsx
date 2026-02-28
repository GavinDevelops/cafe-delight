import { useEffect } from 'react'
import Button from '@/components/ui/Button'

export default function NotFoundPage() {
  useEffect(() => { document.title = 'Page Not Found — Cafe Delight' }, [])
  return (
    <section className="py-24 px-4 text-center">
      <h1 className="text-6xl font-bold text-coffee-300 mb-4">404</h1>
      <h2 className="font-heading text-2xl font-semibold text-espresso mb-4">Page Not Found</h2>
      <p className="text-coffee-500 mb-8 max-w-md mx-auto">
        Looks like this page spilled. Let's get you back to the good stuff.
      </p>
      <Button to="/">Back to Home</Button>
    </section>
  )
}
