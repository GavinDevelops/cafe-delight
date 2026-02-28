import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative hero-atmosphere min-h-[85vh] flex items-center overflow-hidden">
      {/* Floating amber orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-caramel/10 blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full bg-caramel/6 blur-3xl animate-glow-pulse delay-4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-berry/5 blur-3xl animate-glow-pulse delay-7" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-caramel font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
            Townsend, DE
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 animate-fade-up delay-1">
            Your Neighborhood<br />
            <span className="text-caramel">Coffee Shop</span>
          </h1>
          <p className="text-lg md:text-xl text-coffee-500 mb-10 leading-relaxed max-w-lg animate-fade-up delay-2">
            Handcrafted drinks, fresh food, and a warm atmosphere in the heart of Townsend.
            Come for the coffee, stay for the community.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up delay-3">
            <Button to="/menu" variant="primary">
              View Our Menu
            </Button>
            <Button to="/contact" variant="outline" className="border-coffee-300 text-espresso hover:bg-coffee-50">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
    </section>
  )
}
