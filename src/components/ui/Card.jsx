export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-coffee-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-coffee-100 p-6 hover-lift ${className}`} {...props}>
      {children}
    </div>
  )
}
