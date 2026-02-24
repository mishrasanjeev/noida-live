import { useState } from 'react';
import { MapPin, Clock, Train } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { dayTrips } from '../data/daytrips';
import type { DayTrip } from '../types';

type TripCategory = 'All' | DayTrip['category'];

const categoryIcon: Record<DayTrip['category'], string> = {
  Heritage: '🏛️',
  Nature: '🌿',
  Pilgrimage: '🛕',
  'Hill Station': '⛰️',
  City: '🏙️',
};

const categoryColors: Record<DayTrip['category'], string> = {
  Heritage: 'bg-amber-100 text-amber-700',
  Nature: 'bg-emerald-100 text-emerald-700',
  Pilgrimage: 'bg-orange-100 text-orange-700',
  'Hill Station': 'bg-sky-100 text-sky-700',
  City: 'bg-indigo-100 text-indigo-700',
};

const filterCategories: TripCategory[] = ['All', 'Heritage', 'Nature', 'Pilgrimage', 'Hill Station', 'City'];

export function DayTripsSection() {
  const [active, setActive] = useState<TripCategory>('All');

  const filtered = active === 'All' ? dayTrips : dayTrips.filter((t) => t.category === active);

  return (
    <SectionWrapper
      id="day-trips"
      title="Day Trips from Noida"
      subtitle="Explore India's finest destinations — all within a comfortable drive from Noida"
      icon="🗺️"
    >
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
              active === cat
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
            }`}
          >
            {cat !== 'All' && <span className="mr-1">{categoryIcon[cat as DayTrip['category']]}</span>}
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((trip) => (
          <div
            key={trip.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Hero image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={trip.imageUrl}
                alt={trip.destination}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Overlays */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(trip.destination + ' ' + trip.state + ' India')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold text-lg leading-tight drop-shadow no-underline hover:underline"
                  >
                    {trip.destination}
                  </a>
                  <p className="text-white/80 text-xs">{trip.state}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[trip.category]}`}>
                  {categoryIcon[trip.category]} {trip.category}
                </span>
              </div>
            </div>

            <div className="p-4">
              {/* Distance & time */}
              <div className="flex flex-wrap gap-3 mb-3 text-xs font-medium">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(trip.destination + ' ' + trip.state + ' India')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-indigo-600 no-underline hover:underline"
                >
                  <MapPin size={12} />
                  {trip.distance}
                </a>
                <span className="flex items-center gap-1.5 text-slate-600">
                  <Clock size={12} />
                  {trip.driveTime}
                </span>
                {trip.trainAvailable && (
                  <span className="flex items-center gap-1 text-emerald-600">
                    <Train size={12} />
                    Train available
                  </span>
                )}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-3">{trip.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {trip.highlights.slice(0, 4).map((h) => (
                  <Badge key={h} variant="default">{h}</Badge>
                ))}
              </div>

              {/* Best for & season */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 border-t border-slate-100 pt-3 text-xs text-slate-500">
                <div className="flex flex-wrap gap-1">
                  {trip.bestFor.slice(0, 2).map((b) => (
                    <Badge key={b} variant="info">{b}</Badge>
                  ))}
                </div>
                <span className="text-amber-600 font-medium whitespace-nowrap">🌤 {trip.bestSeason}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
