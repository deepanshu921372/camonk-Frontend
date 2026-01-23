import { Button } from '@/components/ui/button'

const navLinks = ['Tools', 'Practice', 'Events', 'Job Board', 'Points']

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CA</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">CA MONK</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                {link}
              </a>
            ))}
          </nav>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Profile</Button>
        </div>
      </div>
    </header>
  )
}
