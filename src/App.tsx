import './App.css';
import { Eye } from 'lucide-react';
import { Header } from './components/Header';
import { MallsSection } from './components/MallsSection';
import { NewsSection } from './components/NewsSection';
import { OfficesSection } from './components/OfficesSection';
import { PlacesSection } from './components/PlacesSection';
import { ApartmentsSection } from './components/ApartmentsSection';
import { RestaurantsSection } from './components/RestaurantsSection';
import { WeatherWidget } from './components/WeatherWidget';
import { HospitalsSection } from './components/HospitalsSection';
import { SchoolsSection } from './components/SchoolsSection';
import { ConnectivitySection } from './components/ConnectivitySection';
import { JewarAirportSection } from './components/JewarAirportSection';
import { ITParkSection } from './components/ITParkSection';
import { EventsSection } from './components/EventsSection';
import { EmergencySection } from './components/EmergencySection';
import { GovernmentSection } from './components/GovernmentSection';
import { EntertainmentSection } from './components/EntertainmentSection';
import { MarketsSection } from './components/MarketsSection';
import { SportsSection } from './components/SportsSection';
import { ReligiousSection } from './components/ReligiousSection';
import { DayTripsSection } from './components/DayTripsSection';
import { useVisitorCount } from './hooks/useVisitorCount';
import { SearchBar } from './components/SearchBar';

const heroLinks = [
  { href: '#weather', label: '🌤️ Weather' },
  { href: '#news', label: '📰 News' },
  { href: '#emergency', label: '🚨 Emergency' },
  { href: '#events', label: '🎪 Events' },
  { href: '#offices', label: '🏢 Offices' },
  { href: '#malls', label: '🛍️ Malls' },
  { href: '#restaurants', label: '🍽️ Food' },
  { href: '#markets', label: '🛒 Markets' },
  { href: '#places', label: '📍 Places' },
  { href: '#entertainment', label: '🎬 Fun' },
  { href: '#sports', label: '⚽ Sports' },
  { href: '#religious', label: '🛕 Temples' },
  { href: '#apartments', label: '🏗️ Apartments' },
  { href: '#hospitals', label: '🏥 Hospitals' },
  { href: '#schools', label: '🎓 Schools' },
  { href: '#connectivity', label: '🚇 Connect' },
  { href: '#jewar-airport', label: '✈️ Airport' },
  { href: '#it-parks', label: '💻 IT Parks' },
  { href: '#government', label: '🏛️ Govt.' },
  { href: '#day-trips', label: '🗺️ Day Trips' },
];

const footerLinks = [
  { href: '#weather', label: 'Live Weather' },
  { href: '#news', label: 'News & Media' },
  { href: '#emergency', label: 'Emergency Helplines' },
  { href: '#events', label: 'Events & Festivals' },
  { href: '#offices', label: 'Office Spaces' },
  { href: '#malls', label: 'Shopping Malls' },
  { href: '#restaurants', label: 'Restaurants & Food' },
  { href: '#markets', label: 'Local Markets' },
  { href: '#places', label: 'Places to Visit' },
  { href: '#entertainment', label: 'Entertainment' },
  { href: '#sports', label: 'Sports & Recreation' },
  { href: '#religious', label: 'Temples & Worship' },
  { href: '#apartments', label: 'Apartments' },
  { href: '#hospitals', label: 'Hospitals & Medical' },
  { href: '#schools', label: 'Schools & Education' },
  { href: '#connectivity', label: 'Connectivity' },
  { href: '#jewar-airport', label: 'Jewar Airport' },
  { href: '#it-parks', label: 'IT Parks' },
  { href: '#government', label: 'Government Services' },
  { href: '#day-trips', label: 'Day Trips' },
];

function App() {
  const visitorCount = useVisitorCount();

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-indigo-300 font-medium tracking-widest text-sm mb-4 uppercase">
            Uttar Pradesh, India
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            🏙️ Noida Live
          </h1>
          <p className="text-indigo-200 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Your complete city directory — restaurants, hospitals, schools, malls, IT parks,
            events, metro routes and everything live in Noida.
          </p>

          {/* Search bar */}
          <div className="mb-8 px-2">
            <SearchBar />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {heroLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3 sm:px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/25 transition-colors no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main>
        {/* Essential info */}
        <WeatherWidget />
        <div className="bg-white">
          <NewsSection />
        </div>
        <EmergencySection />

        {/* Events & culture */}
        <div className="bg-white">
          <EventsSection />
        </div>

        {/* Work & Commerce */}
        <OfficesSection />
        <div className="bg-white">
          <MallsSection />
        </div>
        <RestaurantsSection />
        <div className="bg-white">
          <MarketsSection />
        </div>

        {/* Leisure */}
        <PlacesSection />
        <div className="bg-white">
          <EntertainmentSection />
        </div>
        <SportsSection />
        <div className="bg-white">
          <ReligiousSection />
        </div>

        {/* Living */}
        <ApartmentsSection />
        <div className="bg-white">
          <HospitalsSection />
        </div>
        <SchoolsSection />

        {/* Infrastructure */}
        <div className="bg-white">
          <ConnectivitySection />
        </div>
        <JewarAirportSection />
        <div className="bg-white">
          <ITParkSection />
        </div>

        {/* Services & beyond */}
        <GovernmentSection />
        <div className="bg-white">
          <DayTripsSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏙️</span>
                <div>
                  <span className="block font-bold text-lg leading-none">Noida</span>
                  <span className="block text-xs text-indigo-400 font-medium tracking-wide">CITY DIRECTORY</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The most comprehensive guide to living, working, exploring, and thriving in Noida — the City of the Future.
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-semibold text-slate-200 mb-3">All Sections</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1.5 text-sm text-slate-400">
                {footerLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-indigo-400 transition-colors no-underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>Weather by <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 no-underline">Open-Meteo</a> · Images by <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 no-underline">Unsplash</a></p>
            <div className="flex items-center gap-4">
              {typeof visitorCount === 'number' && (
                <p className="flex items-center gap-1.5">
                  <Eye size={13} className="text-indigo-400" />
                  {visitorCount.toLocaleString()} visitors
                </p>
              )}
              <p>Built by Sanjeev</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
