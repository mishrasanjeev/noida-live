import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { religiousPlaces } from '../data/religious';
import type { ReligiousPlace } from '../types';

type Religion = 'All' | ReligiousPlace['religion'];

const religionIcon: Record<ReligiousPlace['religion'], string> = {
  Hindu: '🛕',
  Muslim: '🕌',
  Christian: '⛪',
  Sikh: '🛕',
  Jain: '✡️',
};

const religionColors: Record<ReligiousPlace['religion'], string> = {
  Hindu: 'bg-orange-100 text-orange-700',
  Muslim: 'bg-emerald-100 text-emerald-700',
  Christian: 'bg-sky-100 text-sky-700',
  Sikh: 'bg-amber-100 text-amber-700',
  Jain: 'bg-violet-100 text-violet-700',
};

const filterReligions: Religion[] = ['All', 'Hindu', 'Muslim', 'Christian', 'Sikh'];

export function ReligiousSection() {
  const [active, setActive] = useState<Religion>('All');

  const filtered = active === 'All' ? religiousPlaces : religiousPlaces.filter((p) => p.religion === active);

  return (
    <SectionWrapper
      id="religious"
      title="Temples & Places of Worship"
      subtitle="Temples, mosques, churches, and gurudwaras — spiritual destinations across Noida"
      icon="🛕"
    >
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filterReligions.map((religion) => (
          <button
            key={religion}
            onClick={() => setActive(religion)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === religion
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
            }`}
          >
            {religion !== 'All' && <span className="mr-1">{religionIcon[religion as ReligiousPlace['religion']]}</span>}
            {religion}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl leading-none">{religionIcon[place.religion]}</span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight">{place.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${religionColors[place.religion]}`}>
                      {place.religion}
                    </span>
                    {place.deity && (
                      <span className="text-xs text-slate-500 italic">{place.deity}</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{place.description}</p>

              {/* Festivals */}
              <div className="mb-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key Festivals</p>
                <div className="flex flex-wrap gap-1.5">
                  {place.festivals.map((f) => (
                    <Badge key={f} variant="accent">{f}</Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {place.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-amber-400 mt-0.5 shrink-0">★</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1.5 text-xs text-slate-500">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(place.name + ' ' + place.location + ' Noida')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 no-underline hover:text-indigo-600 hover:underline transition-colors"
                >
                  <MapPin size={11} className="text-indigo-400 shrink-0" />
                  {place.location}
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} className="text-indigo-400 shrink-0" />
                  {place.timings}
                </span>
                {place.established && (
                  <span className="text-slate-400">Est. {place.established}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
