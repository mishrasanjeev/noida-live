import { useState } from 'react';
import { MapPin, Clock, Phone, IndianRupee } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { sportsFacilities } from '../data/sports';
import type { SportsFacility } from '../types';

type FacilityType = 'All' | SportsFacility['type'];

const typeIcon: Record<SportsFacility['type'], string> = {
  Stadium: '🏟️',
  'Sports Complex': '🏋️',
  Golf: '⛳',
  Swimming: '🏊',
  Gym: '💪',
  Club: '🏸',
};

const filterTypes: FacilityType[] = ['All', 'Stadium', 'Sports Complex', 'Golf', 'Swimming', 'Club'];

export function SportsSection() {
  const [active, setActive] = useState<FacilityType>('All');

  const filtered = active === 'All' ? sportsFacilities : sportsFacilities.filter((f) => f.type === active);

  return (
    <SectionWrapper
      id="sports"
      title="Sports & Recreation"
      subtitle="Stadiums, sports complexes, golf courses, and recreational facilities in Noida"
      icon="⚽"
    >
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === type
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
            }`}
          >
            {type !== 'All' && <span className="mr-1">{typeIcon[type as SportsFacility['type']]}</span>}
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((facility) => (
          <div
            key={facility.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl leading-none">{typeIcon[facility.type]}</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight">{facility.name}</h3>
                  <span className="text-xs font-medium text-indigo-600">{facility.type}</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{facility.description}</p>

              {/* Sports tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {facility.sports.map((s) => (
                  <Badge key={s} variant="success">{s}</Badge>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {facility.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1.5 text-xs text-slate-500">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(facility.name + ' ' + facility.location + ' Noida')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 no-underline hover:text-indigo-600 hover:underline transition-colors"
                >
                  <MapPin size={11} className="text-indigo-400 shrink-0" />
                  {facility.location}
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} className="text-indigo-400 shrink-0" />
                  {facility.timings}
                </span>
                {facility.membershipFee && (
                  <span className="flex items-center gap-1.5 font-medium text-slate-600">
                    <IndianRupee size={11} className="text-emerald-500 shrink-0" />
                    {facility.membershipFee}
                  </span>
                )}
                {facility.phone && (
                  <a href={`tel:${facility.phone}`} className="flex items-center gap-1.5 text-indigo-600 no-underline font-medium">
                    <Phone size={11} />
                    {facility.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
