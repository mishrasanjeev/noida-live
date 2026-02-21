import { useState } from 'react';
import { MapPin, IndianRupee, Building2, Calendar } from 'lucide-react';
import { apartments } from '../data/apartments';
import type { Apartment } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type StatusFilter = Apartment['status'] | 'All';

const ALL_STATUSES: StatusFilter[] = ['All', 'New Launch', 'Under Construction', 'Ready to Move'];

const statusBadgeVariant: Record<Apartment['status'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  'New Launch': 'accent',
  'Under Construction': 'warning',
  'Ready to Move': 'success',
};

export function ApartmentsSection() {
  const [active, setActive] = useState<StatusFilter>('All');

  const filtered =
    active === 'All' ? apartments : apartments.filter((a) => a.status === active);

  return (
    <SectionWrapper
      id="apartments"
      title="High-Rise Apartments"
      subtitle="Recently launched premium residential projects across Noida"
      icon="🏗️"
    >
      {/* Filter bar */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
        {ALL_STATUSES.map((status) => (
          <button
            key={status}
            onClick={() => setActive(status)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              active === status
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((apt) => (
          <Card key={apt.id} className="flex flex-col overflow-hidden">
            {/* Image */}
            <div className="relative h-36 sm:h-44 overflow-hidden">
              <img
                src={apt.imageUrl}
                alt={apt.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 right-3">
                <Badge variant={statusBadgeVariant[apt.status]}>{apt.status}</Badge>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-4 flex-1">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-snug">{apt.name}</h3>
            </div>

            {/* Developer */}
            <p className="text-xs text-slate-400 font-medium -mt-2">{apt.developer}</p>

            {/* Location */}
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <MapPin size={12} />
              <span>{apt.location}</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 text-indigo-600 font-semibold text-sm">
              <IndianRupee size={13} />
              <span>{apt.priceRange}</span>
            </div>

            {/* Configurations */}
            <div className="flex flex-wrap gap-1.5">
              {apt.configurations.map((config) => (
                <span
                  key={config}
                  className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-full font-medium"
                >
                  {config}
                </span>
              ))}
            </div>

            {/* Towers & Floors */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <Building2 size={13} className="text-slate-400" />
                <span>{apt.towers} Towers</span>
              </div>
              <div className="flex items-center gap-1">
                <Building2 size={13} className="text-slate-400" />
                <span>{apt.maxFloors} Floors</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{apt.description}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1">
              {apt.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-sm text-slate-600">
                <Calendar size={13} className="text-indigo-400" />
                <span className="font-medium">{apt.possession}</span>
              </div>
              <StarRating rating={apt.rating} />
            </div>
            </div>{/* end body */}
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No apartments in this category.</div>
      )}
    </SectionWrapper>
  );
}
