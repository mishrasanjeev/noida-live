import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

const navLinks: NavLink[] = [
  { label: 'Weather', href: '#weather', icon: '🌤️' },
  { label: 'News', href: '#news', icon: '📰' },
  { label: 'Emergency', href: '#emergency', icon: '🚨' },
  { label: 'Events', href: '#events', icon: '🎪' },
  { label: 'Offices', href: '#offices', icon: '🏢' },
  { label: 'Malls', href: '#malls', icon: '🛍️' },
  { label: 'Food', href: '#restaurants', icon: '🍽️' },
  { label: 'Markets', href: '#markets', icon: '🛒' },
  { label: 'Places', href: '#places', icon: '📍' },
  { label: 'Fun', href: '#entertainment', icon: '🎬' },
  { label: 'Sports', href: '#sports', icon: '⚽' },
  { label: 'Temples', href: '#religious', icon: '🛕' },
  { label: 'Homes', href: '#apartments', icon: '🏗️' },
  { label: 'Hospitals', href: '#hospitals', icon: '🏥' },
  { label: 'Schools', href: '#schools', icon: '🎓' },
  { label: 'Connect', href: '#connectivity', icon: '🚇' },
  { label: 'Airport', href: '#jewar-airport', icon: '✈️' },
  { label: 'IT Parks', href: '#it-parks', icon: '💻' },
  { label: 'Govt.', href: '#government', icon: '🏛️' },
  { label: 'Trips', href: '#day-trips', icon: '🗺️' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline shrink-0">
            <span className="text-2xl">🏙️</span>
            <div className="leading-tight hidden sm:block">
              <span className="block font-bold text-slate-900 text-base leading-none">Noida</span>
              <span className="block text-xs text-indigo-600 font-medium tracking-wide">CITY DIRECTORY</span>
            </div>
          </a>

          {/* Desktop nav — scrollable */}
          <nav className="hidden md:flex flex-1 items-center gap-0.5 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors no-underline whitespace-nowrap shrink-0"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white max-h-[70vh] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors no-underline"
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
