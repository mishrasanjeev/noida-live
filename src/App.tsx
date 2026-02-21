import './App.css';
import { Header } from './components/Header';
import { MallsSection } from './components/MallsSection';
import { NewsSection } from './components/NewsSection';
import { OfficesSection } from './components/OfficesSection';
import { PlacesSection } from './components/PlacesSection';
import { ApartmentsSection } from './components/ApartmentsSection';
import { RestaurantsSection } from './components/RestaurantsSection';
import { WeatherWidget } from './components/WeatherWidget';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-indigo-300 font-medium tracking-widest text-sm mb-4 uppercase">
            Uttar Pradesh, India
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            🏙️ Noida City Directory
          </h1>
          <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your one-stop guide to weather, news, workspaces, malls, restaurants, and must-visit
            places in the City of the Future.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { href: '#weather', label: '🌤️ Weather' },
              { href: '#news', label: '📰 News' },
              { href: '#offices', label: '🏢 Offices' },
              { href: '#malls', label: '🛍️ Malls' },
              { href: '#restaurants', label: '🍽️ Food' },
              { href: '#places', label: '📍 Places' },
              { href: '#apartments', label: '🏗️ Apartments' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/25 transition-colors no-underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <main>
        <WeatherWidget />
        <div className="bg-white">
          <NewsSection />
        </div>
        <OfficesSection />
        <div className="bg-white">
          <MallsSection />
        </div>
        <RestaurantsSection />
        <div className="bg-white">
          <PlacesSection />
        </div>
        <ApartmentsSection />
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
                A comprehensive guide to living, working, and exploring Noida — the City of the Future.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-3">Sections</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {[
                  { href: '#weather', label: 'Live Weather' },
                  { href: '#news', label: 'News & Media' },
                  { href: '#offices', label: 'Office Spaces' },
                  { href: '#malls', label: 'Shopping Malls' },
                  { href: '#restaurants', label: 'Eating Joints' },
                  { href: '#places', label: 'Places to Visit' },
                  { href: '#apartments', label: 'Apartments' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-indigo-400 transition-colors no-underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-200 mb-3">About Noida</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Noida (New Okhla Industrial Development Authority) is a planned city in Gautam Buddha Nagar
                district, Uttar Pradesh. It is a major IT and business hub in the NCR region.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>Weather data by <a href="https://open-meteo.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 no-underline">Open-Meteo</a> — free & open-source</p>
            <p>Built by Sanjeev</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
