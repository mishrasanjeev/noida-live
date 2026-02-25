import { Menu, X, Download, Bell, BellOff } from 'lucide-react';
import { useState } from 'react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { useOneSignal } from '../hooks/useOneSignal';

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
  { label: 'PG/Hostel', href: '#hostels', icon: '🏠' },
  { label: 'Health', href: '#hospitals', icon: '🏥' },
  { label: 'Schools', href: '#schools', icon: '🎓' },
  { label: 'Transit', href: '#connectivity', icon: '🚇' },
  { label: 'Airport', href: '#jewar-airport', icon: '✈️' },
  { label: 'IT Parks', href: '#it-parks', icon: '💻' },
  { label: 'Govt.', href: '#government', icon: '🏛️' },
  { label: 'Trips', href: '#day-trips', icon: '🗺️' },
  { label: 'Feedback', href: '#feedback', icon: '📬' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [iosTooltip, setIosTooltip] = useState(false);
  const { canInstall, isIos, isInstalled, install } = useInstallPrompt();
  const { state: notifState, subscribe, unsubscribe } = useOneSignal();

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

          {/* Notification bell — hidden when unsupported or still loading */}
          {notifState !== 'unsupported' && notifState !== 'loading' && (
            <button
              onClick={notifState === 'subscribed' ? unsubscribe : subscribe}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-sm shrink-0 ${
                notifState === 'subscribed'
                  ? 'bg-indigo-50 border border-indigo-200 text-indigo-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700'
              }`}
              aria-label={notifState === 'subscribed' ? 'Unsubscribe from notifications' : 'Enable push notifications'}
              title={notifState === 'subscribed' ? 'Notifications on — tap to turn off' : 'Get alerts for Noida news & events'}
            >
              {notifState === 'subscribed' ? <Bell size={13} /> : <BellOff size={13} />}
              <span className="hidden sm:inline">
                {notifState === 'subscribed' ? 'Notifs On' : 'Notify Me'}
              </span>
            </button>
          )}

          {/* Install App button — Android: native prompt / iOS: tooltip / hidden if installed */}
          {!isInstalled && (canInstall || isIos) && (
            <div className="relative shrink-0">
              <button
                onClick={() => {
                  if (isIos) setIosTooltip((v) => !v);
                  else install();
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-semibold hover:bg-indigo-50 transition-colors shadow-sm shrink-0"
                aria-label="Install Noida Live app"
              >
                <Download size={13} />
                Install App
              </button>

              {/* iOS instruction tooltip */}
              {isIos && iosTooltip && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-slate-900 text-white text-xs rounded-2xl p-4 shadow-xl z-50">
                  <p className="font-semibold mb-1">Install on iPhone / iPad</p>
                  <ol className="list-decimal list-inside space-y-1 text-slate-300 leading-relaxed">
                    <li>Tap the <span className="text-white font-medium">Share</span> button (□↑) in Safari</li>
                    <li>Scroll down and tap <span className="text-white font-medium">Add to Home Screen</span></li>
                    <li>Tap <span className="text-white font-medium">Add</span></li>
                  </ol>
                  <button
                    onClick={() => setIosTooltip(false)}
                    className="mt-3 text-indigo-300 hover:text-white text-[11px]"
                  >
                    Got it ✕
                  </button>
                </div>
              )}
            </div>
          )}

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
