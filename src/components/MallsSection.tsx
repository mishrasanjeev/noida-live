import { MapPin, Clock, ShoppingBag } from 'lucide-react';
import { malls } from '../data/malls';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

export function MallsSection() {
  return (
    <SectionWrapper
      id="malls"
      title="Shopping Malls"
      subtitle="From India's largest mall to Venice-inspired luxury — Noida's best retail destinations"
      icon="🛍️"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {malls.map((mall) => (
          <Card
            key={mall.id}
            className={`p-5 flex flex-col gap-4 ${
              mall.isPremium ? 'border-amber-200 ring-1 ring-amber-100' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">{mall.name}</h3>
                  {mall.isPremium && (
                    <span className="text-amber-400 text-lg">★</span>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-1 text-slate-500 text-sm">
                  <MapPin size={13} />
                  <span>{mall.location}</span>
                </div>
              </div>
              {mall.isPremium && <Badge variant="accent">Premium</Badge>}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <ShoppingBag size={13} className="text-indigo-400" />
                <span>{mall.stores}+ stores</span>
              </div>
              <div className="text-slate-300">|</div>
              <span>{mall.floors} floors</span>
            </div>

            {/* Rating */}
            <StarRating rating={mall.rating} />

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed">{mall.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5">
              {mall.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Timings */}
            <div className="mt-auto flex items-center gap-1.5 text-sm text-slate-500 pt-3 border-t border-slate-50">
              <Clock size={13} className="text-slate-400" />
              <span>{mall.timings}</span>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
