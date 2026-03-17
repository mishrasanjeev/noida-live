import { useState } from 'react';
import { MapPin, Clock, Users } from 'lucide-react';
import { cafes } from '../data/cafes';
import type { Cafe } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type Category = Cafe['category'] | 'All';

const ALL_CATEGORIES: Category[] = ['All', 'Cafe', 'Lounge', 'Rooftop', 'Bakery'];

const categoryBadgeVariant: Record<Cafe['category'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  Cafe: 'info',
  Lounge: 'accent',
  Rooftop: 'warning',
  Bakery: 'success',
};

export function CafesSection() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? cafes : cafes.filter((c) => c.category === active);

  return (
    <SectionWrapper
      id="cafes"
      title="Cafes & Lounges"
      subtitle="Specialty coffee, rooftop bars, co-working cafes, and the city's best chai — Noida's buzzing café culture"
      icon="☕"
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
        {filtered.map((cafe) => (
          <Card key={cafe.id} className="p-5 flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-tight">{cafe.name}</h3>
              <Badge variant={categoryBadgeVariant[cafe.category]}>
                {cafe.category}
              </Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin size={12} />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(cafe.name + ' ' + cafe.location + ' Noida')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                {cafe.location}
              </a>
            </div>

            {/* Rating */}
            <StarRating rating={cafe.rating} />

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{cafe.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1">
              {cafe.highlights.slice(0, 3).map((h) => (
                <span key={h} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                  {h}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {cafe.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-sm text-slate-500">
                <Users size={12} className="text-slate-400" />
                <span className="font-medium text-slate-700">{cafe.priceForTwo}</span>
                <span className="text-slate-400">for two</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock size={11} />
                <span>{cafe.timings}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No cafes in this category.</div>
      )}
    </SectionWrapper>
  );
}
