export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-espresso mb-3">{title}</h2>
      {subtitle && <p className="text-coffee-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
