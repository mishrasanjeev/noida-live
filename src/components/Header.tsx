import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavLink {
  label: string;
  href: string;
  icon: string;
}

// Near Me is rendered separately as a featured button — not in this list
const navLinks: NavLink[] = [
  { label: 'Weather', href: '#weather', icon: '🌤️' },
  { label: 'News', href: '#news', icon: '📰' },
  { label: 'SOS', href: '#emergency', icon: '🚨' },
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
  { label: 'Health', href: '#hospitals', icon: '🏥' },
  { label: 'Schools', href: '#schools', icon: '🎓' },
  { label: 'Transit', href: '#connectivity', icon: '🚇' },
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
        {/* Row 1: Logo + Near Me CTA + mobile hamburger */}
        <div className="flex items-center gap-3 h-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 no-underline shrink-0">
            <span className="text-2xl">🏙️</span>
            <div className="leading-tight hidden sm:block">
              <span className="block font-bold text-slate-900 text-base leading-none">Noida</span>
              <span className="block text-xs text-indigo-600 font-medium tracking-wide">CITY DIRECTORY</span>
            </div>
          </a>

          {/* Near Me — always visible, prominent CTA */}
          <a
            href="#near-me"
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors no-underline shadow-sm shadow-indigo-200 shrink-0"
          >
            <span>🧭</span>
            Near Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Row 2: Desktop nav — wrapping pills, always fully visible */}
        <nav className="hidden md:flex flex-wrap gap-x-0.5 gap-y-0.5 pb-2">
          {/* Near Me highlighted first in desktop nav too */}
          <a
            href="#near-me"
            className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors no-underline mr-1"
          >
            <span>🧭</span>
            Near Me
          </a>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors no-underline"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white max-h-[70vh] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 gap-1">
            {/* Near Me — first slot, full-width, highlighted */}
            <a
              href="#near-me"
              onClick={() => setMobileOpen(false)}
              className="col-span-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors no-underline mb-1"
            >
              <span className="text-lg">🧭</span>
              Near Me — ATM, Parking, Petrol & More
            </a>
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
