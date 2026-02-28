import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-coffee-800 via-coffee-700 to-espresso text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Neighborhood<br />
            <span className="text-caramel">Coffee Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-coffee-200 mb-8 leading-relaxed">
            Handcrafted drinks, fresh food, and a warm atmosphere in the heart of downtown Dover.
            Come for the coffee, stay for the community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/menu" variant="primary" className="bg-caramel hover:bg-amber-600 text-white">
              View Our Menu
            </Button>
            <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="var(--color-cream)" />
        </svg>
      </div>
    </section>
  )
}
