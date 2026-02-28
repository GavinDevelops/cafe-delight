import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import MobileMenu from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/hours', label: 'Hours' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-coffee-900/90 backdrop-blur-sm border-b border-coffee-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-2xl font-bold text-espresso hover:text-coffee-600 transition-colors">
            Cafe Delight
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-coffee-700 bg-coffee-50'
                      : 'text-coffee-500 hover:text-coffee-700 hover:bg-coffee-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-md text-coffee-500 hover:text-coffee-700 hover:bg-coffee-50 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </header>
  )
}
