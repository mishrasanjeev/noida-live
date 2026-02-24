import { useState } from 'react';
import { MapPin, Clock, Phone, Star } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { StarRating } from './ui/StarRating';
import { entertainmentVenues } from '../data/entertainment';
import type { EntertainmentVenue } from '../types';

type VenueType = 'All' | EntertainmentVenue['type'];

const typeIcon: Record<EntertainmentVenue['type'], string> = {
  Cinema: '🎬',
  'Amusement Park': '🎢',
  Gaming: '🎮',
  Bowling: '🎳',
  Club: '🎵',
  Comedy: '😂',
};

const filterTypes: VenueType[] = ['All', 'Cinema', 'Amusement Park', 'Gaming', 'Bowling', 'Comedy'];

export function EntertainmentSection() {
  const [active, setActive] = useState<VenueType>('All');

  const filtered = active === 'All' ? entertainmentVenues : entertainmentVenues.filter((v) => v.type === active);

  return (
    <SectionWrapper
      id="entertainment"
      title="Entertainment"
      subtitle="Cinemas, amusement parks, gaming zones, and fun venues across Noida"
      icon="🎬"
    >
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-colors ${
              active === type
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
            }`}
          >
            {type !== 'All' && <span className="mr-1">{typeIcon[type as EntertainmentVenue['type']]}</span>}
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((venue) => (
          <div
            key={venue.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            {/* Header bar */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{typeIcon[venue.type]}</span>
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">{venue.type}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight">{venue.name}</h3>
                </div>
                <StarRating rating={venue.rating} showValue />
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(venue.name + ' ' + venue.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-slate-500 mb-3 no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                <MapPin size={12} className="text-indigo-400 shrink-0" />
                {venue.location}
              </a>
              <p className="text-slate-600 text-sm leading-relaxed">{venue.description}</p>
            </div>

            {/* Highlights */}
            <div className="px-5 pb-3">
              <div className="flex flex-wrap gap-1.5">
                {venue.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1 px-2 py-0.5 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
                    <Star size={9} className="fill-indigo-400 text-indigo-400" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-slate-100 px-5 py-3 bg-slate-50 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock size={11} className="text-indigo-400" />
                {venue.timings}
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                💰 {venue.priceRange}
              </span>
              {venue.phone && (
                <a href={`tel:${venue.phone}`} className="flex items-center gap-1 text-indigo-600 no-underline font-medium">
                  <Phone size={11} />
                  {venue.phone}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
