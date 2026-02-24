import { useState } from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import type { Restaurant } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type Category = Restaurant['category'] | 'All';

const ALL_CATEGORIES: Category[] = [
  'All',
  'North Indian',
  'Continental',
  'Street Food',
  'Fast Food',
  'Multi-Cuisine',
  'South Indian',
];

const categoryBadgeVariant: Record<Restaurant['category'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  'North Indian': 'warning',
  'Continental': 'info',
  'Street Food': 'accent',
  'Fast Food': 'default',
  'Multi-Cuisine': 'success',
  'South Indian': 'default',
};

export function RestaurantsSection() {
  const [active, setActive] = useState<Category>('All');

  const filtered =
    active === 'All' ? restaurants : restaurants.filter((r) => r.category === active);

  return (
    <SectionWrapper
      id="restaurants"
      title="Eating Joints"
      subtitle="From street food to fine dining — the flavours of Noida on one page"
      icon="🍽️"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((restaurant) => (
          <Card key={restaurant.id} className="p-5 flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-tight">{restaurant.name}</h3>
              <Badge variant={categoryBadgeVariant[restaurant.category]}>
                {restaurant.category}
              </Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin size={12} />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.name + ' ' + restaurant.location + ' Noida')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                {restaurant.location}
              </a>
            </div>

            {/* Rating */}
            <StarRating rating={restaurant.rating} />

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{restaurant.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {restaurant.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <Users size={12} className="text-slate-400" />
                <span className="font-medium text-slate-700">{restaurant.priceForTwo}</span>
                <span className="text-slate-400">for two</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={11} />
                <span>{restaurant.timings}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No restaurants in this category.</div>
      )}
    </SectionWrapper>
  );
}
