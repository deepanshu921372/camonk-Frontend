import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = ['Tools', 'Practice', 'Events', 'Job Board', 'Points']

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs md:text-sm">CA</span>
            </div>
            <span className="font-bold text-gray-900 text-base md:text-lg">CA MONK</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 md:px-4">
              Profile
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="block py-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
