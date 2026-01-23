const footerLinks = {
  resources: ['Blog', 'Webinars', 'Case Studies'],
  platform: ['Job Board', 'Practice Tests', 'Mentorship'],
  connect: ['LinkedIn', 'Twitter', 'Instagram'],
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-8 md:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs md:text-sm">CA</span>
              </div>
              <span className="font-bold text-base md:text-lg">CA MONK</span>
            </div>
            <p className="text-slate-400 text-xs md:text-sm">
              Empowering the next generation of financial leaders with tools, community, and knowledge.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-slate-200 text-sm md:text-base">RESOURCES</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-slate-200 text-sm md:text-base">PLATFORM</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.platform.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-slate-200 text-sm md:text-base">CONNECT</h3>
            <ul className="space-y-1.5 md:space-y-2">
              {footerLinks.connect.map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs md:text-sm">© 2024 CA Monk. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white text-xs md:text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
