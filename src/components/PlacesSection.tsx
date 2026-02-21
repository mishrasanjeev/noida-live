import { useState } from 'react';
import { MapPin, Clock, Ticket } from 'lucide-react';
import { places } from '../data/places';
import type { Place } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type Category = Place['category'] | 'All';

const ALL_CATEGORIES: Category[] = ['All', 'Nature', 'Theme Park', 'Religious', 'Heritage', 'Entertainment'];

const categoryBadgeVariant: Record<Place['category'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  Nature: 'success',
  'Theme Park': 'accent',
  Religious: 'warning',
  Heritage: 'info',
  Entertainment: 'default',
};

const categoryEmoji: Record<Place['category'], string> = {
  Nature: '🌿',
  'Theme Park': '🎢',
  Religious: '🛕',
  Heritage: '🏛️',
  Entertainment: '🎬',
};

export function PlacesSection() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? places : places.filter((p) => p.category === active);

  return (
    <SectionWrapper
      id="places"
      title="Places to Visit"
      subtitle="Explore Noida's parks, temples, theme parks, and hidden gems"
      icon="📍"
    >
      {/* Filter bar */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((place) => (
          <Card key={place.id} className="p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{categoryEmoji[place.category]}</span>
                <h3 className="font-bold text-slate-900 text-base leading-snug">{place.name}</h3>
              </div>
              <Badge variant={categoryBadgeVariant[place.category]}>{place.category}</Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin size={12} />
              <span>{place.location}</span>
            </div>

            {/* Rating */}
            <StarRating rating={place.rating} />

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{place.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {place.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-sm">
                <Ticket size={13} className="text-indigo-400" />
                <span className="font-medium text-slate-700">{place.entryFee}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={11} />
                <span>{place.timings}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No places in this category.</div>
      )}
    </SectionWrapper>
  );
}
