import { MapPin, Building2 } from 'lucide-react';
import { itparks } from '../data/itparks';
import type { ITpark } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

const typeBadgeVariant: Record<ITpark['type'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  SEZ: 'accent',
  'IT Park': 'default',
  'Tech Hub': 'info',
};

export function ITParkSection() {
  return (
    <SectionWrapper
      id="it-parks"
      title="IT Parks & Tech Hubs"
      subtitle="Major technology parks, SEZs, and innovation corridors powering Noida's economy"
      icon="💻"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {itparks.map((park) => (
          <Card key={park.id} className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-snug flex-1">{park.name}</h3>
              <Badge variant={typeBadgeVariant[park.type]}>{park.type}</Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin size={13} className="shrink-0" />
              <span>{park.location}</span>
            </div>

            {/* Area */}
            <div className="flex items-center gap-1.5 text-slate-600 text-sm">
              <Building2 size={13} className="text-slate-400 shrink-0" />
              <span>{park.totalArea}</span>
            </div>

            {/* Major companies */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Major Companies</p>
              <div className="flex flex-wrap gap-1.5">
                {park.majorCompanies.map((co) => (
                  <span
                    key={co}
                    className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-full font-medium"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{park.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5">
              {park.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-end">
              <StarRating rating={park.rating} />
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
