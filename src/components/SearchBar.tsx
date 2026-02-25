import { Search, X } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface SearchItem {
  label: string;
  href: string;
  icon: string;
  keywords: string[];
}

const searchIndex: SearchItem[] = [
  { label: 'Live Weather', href: '#weather', icon: '🌤️', keywords: ['weather', 'temperature', 'rain', 'humidity', 'forecast', 'climate', 'wind'] },
  { label: 'News', href: '#news', icon: '📰', keywords: ['news', 'latest', 'updates', 'media', 'headlines', 'current'] },
  { label: 'Emergency & Helplines', href: '#emergency', icon: '🚨', keywords: ['emergency', 'sos', 'police', 'ambulance', 'fire', 'helpline', '100', '102', '101', 'women', 'child', 'cyber', 'control room'] },
  { label: 'Events & Festivals', href: '#events', icon: '🎪', keywords: ['events', 'festivals', 'holi', 'diwali', 'mela', 'marathon', 'auto expo', 'navratri', 'basant', 'fair', 'celebration'] },
  { label: 'Office Spaces', href: '#offices', icon: '🏢', keywords: ['office', 'coworking', 'workspace', 'work', 'business', 'managed', 'rent office', 'co-working'] },
  { label: 'Shopping Malls', href: '#malls', icon: '🛍️', keywords: ['mall', 'shopping', 'dlf', 'gardens galleria', 'great india place', 'gip', 'sector 18', 'shop', 'store'] },
  { label: 'Restaurants & Food', href: '#restaurants', icon: '🍽️', keywords: ['food', 'restaurant', 'eat', 'dining', 'lunch', 'dinner', 'cafe', 'chinese', 'north indian', 'pizza', 'burger', 'fast food', 'biryani', 'dine', 'cuisine'] },
  { label: 'Local Markets', href: '#markets', icon: '🛒', keywords: ['market', 'bazaar', 'sector 18', 'local', 'weekly', 'vegetable', 'sabzi', 'grocery', 'sadar', 'brahmaputra'] },
  { label: 'Places to Visit', href: '#places', icon: '📍', keywords: ['places', 'visit', 'tourist', 'attractions', 'sightseeing', 'park', 'garden', 'okhla', 'botanical', 'lake'] },
  { label: 'Entertainment', href: '#entertainment', icon: '🎬', keywords: ['entertainment', 'cinema', 'movie', 'gaming', 'bowling', 'amusement', 'fun', 'comedy', 'multiplex', 'pvr', 'inox', 'film', 'watch'] },
  { label: 'Sports Facilities', href: '#sports', icon: '⚽', keywords: ['sports', 'stadium', 'gym', 'swimming', 'cricket', 'football', 'golf', 'fitness', 'badminton', 'tennis', 'pool'] },
  { label: 'Temples & Religious Places', href: '#religious', icon: '🛕', keywords: ['temple', 'mandir', 'mosque', 'masjid', 'church', 'gurudwara', 'religious', 'worship', 'prayer', 'iskcon', 'dargah'] },
  { label: 'Apartments & Housing', href: '#apartments', icon: '🏗️', keywords: ['apartment', 'flat', 'housing', 'property', 'buy', 'rent', 'residential', 'bhk', 'builder', 'real estate', 'home', 'floor', 'possession', '2bhk', '3bhk', '4bhk'] },
  { label: 'PG & Hostels', href: '#hostels', icon: '🏠', keywords: ['pg', 'paying guest', 'hostel', 'co-living', 'coliving', 'room', 'accommodation', 'boys hostel', 'girls hostel', 'ladies hostel', 'working women', 'single room', 'shared room', 'bachelor', 'furnished room', 'stanza', 'zolo', 'nestaway', 'oyo life'] },
  { label: 'Hospitals & Health', href: '#hospitals', icon: '🏥', keywords: ['hospital', 'doctor', 'health', 'medical', 'clinic', 'emergency hospital', 'specialist', 'nursing home', 'apollo', 'fortis', 'max', 'jaypee'] },
  { label: 'Schools & Education', href: '#schools', icon: '🎓', keywords: ['school', 'college', 'education', 'university', 'admission', 'student', 'cbse', 'icse', 'amity', 'iit', 'delhi public'] },
  { label: 'Metro & Connectivity', href: '#connectivity', icon: '🚇', keywords: ['metro', 'bus', 'connectivity', 'transport', 'train', 'route', 'expressway', 'travel', 'commute', 'nh24', 'yamuna', 'blue line', 'aqua line'] },
  { label: 'Jewar International Airport', href: '#jewar-airport', icon: '✈️', keywords: ['airport', 'jewar', 'flight', 'noida international', 'nial', 'yamuna airport', 'terminal', 'runway'] },
  { label: 'IT Parks & Tech Hub', href: '#it-parks', icon: '💻', keywords: ['it park', 'tech', 'software', 'company', 'sector 62', 'infosys', 'wipro', 'tcs', 'it hub', 'jobs', 'startup', 'tech park', 'sector 135'] },
  { label: 'Government Services', href: '#government', icon: '🏛️', keywords: ['government', 'authority', 'noida authority', 'dm', 'rto', 'passport', 'court', 'services', 'certificate', 'civic', 'municipality'] },
  { label: 'Day Trips from Noida', href: '#day-trips', icon: '🗺️', keywords: ['day trip', 'agra', 'taj mahal', 'mathura', 'haridwar', 'rishikesh', 'corbett', 'mussoorie', 'jaipur', 'lucknow', 'travel', 'weekend', 'getaway', 'nearby'] },
  { label: 'Near Me', href: '#near-me', icon: '🧭', keywords: ['near me', 'nearby', 'parking', 'car park', 'gym near me', 'fitness near', 'petrol pump', 'petrol', 'diesel', 'fuel', 'cng', 'pharmacy', 'medical store', 'chemist', 'medicine', 'drug store', 'dispensary', 'atm', 'bank', 'cash', 'withdraw', 'hdfc', 'sbi', 'icici', 'axis', 'grocery', 'kirana', 'supermarket', 'dmart', 'reliance fresh', 'vegetables', 'auto stand', 'auto', 'cab', 'taxi', 'ola', 'uber', 'rickshaw', 'metro station', 'nearest metro', 'metro near me', 'blue line', 'aqua line', 'dmrc', 'nmrc', 'rapid metro', 'restaurant near me', 'cafe near me', 'coffee near me', 'eat near me', 'food near me', 'starbucks', 'cafe coffee day', 'ccd', 'social noida'] },
];

function saveUnmatchedSearch(query: string) {
  // 1. Fire GA4 custom event (visible in Analytics → Events as "search_not_found")
  try {
    gtag('event', 'search_not_found', { search_term: query });
  } catch {
    // gtag not available
  }

  // 2. Persist to localStorage for the admin panel
  try {
    const key = 'noida_unmatched_searches';
    const existing: { query: string; ts: number }[] = JSON.parse(localStorage.getItem(key) ?? '[]');
    const isDupe = existing.some(
      (e) => e.query.toLowerCase() === query.toLowerCase() && Date.now() - e.ts < 86_400_000,
    );
    if (!isDupe) {
      existing.push({ query: query.trim(), ts: Date.now() });
      localStorage.setItem(key, JSON.stringify(existing.slice(-200)));
    }
  } catch {
    // localStorage unavailable — silently ignore
  }
}

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results =
    query.trim().length >= 1
      ? searchIndex.filter((item) => {
          const q = query.toLowerCase();
          return item.label.toLowerCase().includes(q) || item.keywords.some((k) => k.includes(q));
        })
      : [];

  // Save unmatched searches after user pauses typing
  useEffect(() => {
    if (query.trim().length < 2) return;
    const id = setTimeout(() => {
      if (results.length === 0) saveUnmatchedSearch(query.trim());
    }, 1500);
    return () => clearTimeout(id);
  }, [query, results.length]);

  // Close dropdown on outside click
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [handleOutsideClick]);

  function navigateTo(href: string) {
    setOpen(false);
    setQuery('');
    setActiveIdx(-1);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Escape') {
      setOpen(false);
      inputRef.current?.blur();
    } else if (e.key === 'Enter' && activeIdx >= 0 && results[activeIdx]) {
      navigateTo(results[activeIdx].href);
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search input */}
      <div className="flex items-center gap-3 bg-white rounded-full px-5 py-3.5 shadow-xl border border-transparent focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-100 transition-all">
        <Search size={18} className="text-slate-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search Noida — restaurants, hospitals, metro, events…"
          className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-sm md:text-base outline-none"
          aria-label="Search Noida city directory"
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setOpen(false);
              inputRef.current?.focus();
            }}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && query.trim().length >= 1 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
          {results.length > 0 ? (
            <ul role="listbox">
              {results.map((item, idx) => (
                <li key={item.href} role="option" aria-selected={activeIdx === idx}>
                  <button
                    onMouseDown={() => navigateTo(item.href)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left text-sm transition-colors ${
                      activeIdx === idx
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-lg leading-none">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-auto text-xs text-slate-300">↵</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-5 text-center">
              <p className="text-sm text-slate-600">
                No results for{' '}
                <span className="font-semibold text-slate-800">"{query}"</span>
              </p>
              <p className="text-xs mt-1 text-indigo-500">
                We've noted your search — we'll add it soon!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
