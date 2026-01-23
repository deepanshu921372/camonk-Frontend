const footerLinks = {
  resources: ['Blog', 'Webinars', 'Case Studies'],
  platform: ['Job Board', 'Practice Tests', 'Mentorship'],
  connect: ['LinkedIn', 'Twitter', 'Instagram'],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="font-bold text-lg">CA MONK</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering the next generation of financial leaders with tools, community, and knowledge.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-200">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-200">PLATFORM</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-slate-200">CONNECT</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 CA Monk. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
