export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-coffee-100 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}
