import { Link } from 'react-router'

export default function Button({ children, to, variant = 'primary', type = 'button', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream'

  const variants = {
    primary: 'bg-caramel text-coffee-900 hover:bg-amber-500 focus:ring-caramel',
    secondary: 'bg-coffee-100 text-coffee-600 hover:bg-coffee-200 focus:ring-coffee-400',
    outline: 'border-2 border-coffee-200 text-coffee-600 hover:bg-coffee-50 focus:ring-coffee-500',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }

  return <button type={type} className={classes} {...props}>{children}</button>
}
