import { useState } from 'react';
import { MapPin, Phone, Star, UtensilsCrossed, Utensils, Wifi } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { hostels } from '../data/hostels';
import type { HostelPG } from '../types';

type TypeFilter = HostelPG['type'] | 'All';
type GenderFilter = HostelPG['gender'] | 'All';

const TYPE_FILTERS: TypeFilter[] = ['All', 'PG', 'Hostel', 'Co-living'];
const GENDER_FILTERS: GenderFilter[] = ['All', 'Male', 'Female', 'Co-ed'];

const typeBadge: Record<HostelPG['type'], 'default' | 'accent' | 'info'> = {
  PG: 'default',
  Hostel: 'info',
  'Co-living': 'accent',
};

const genderColor: Record<HostelPG['gender'], string> = {
  Male: 'bg-blue-50 text-blue-700 border-blue-100',
  Female: 'bg-pink-50 text-pink-700 border-pink-100',
  'Co-ed': 'bg-violet-50 text-violet-700 border-violet-100',
};

const genderIcon: Record<HostelPG['gender'], string> = {
  Male: '👨',
  Female: '👩',
  'Co-ed': '🧑‍🤝‍🧑',
};

function StarRatingSmall({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star size={12} className="text-amber-400 fill-amber-400" />
      <span className="text-xs font-semibold text-slate-700">{rating.toFixed(1)}</span>
    </div>
  );
}

export function HostelSection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('All');
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('All');

  const filtered = hostels.filter((h) => {
    const typeMatch = typeFilter === 'All' || h.type === typeFilter;
    const genderMatch = genderFilter === 'All' || h.gender === genderFilter;
    return typeMatch && genderMatch;
  });

  return (
    <SectionWrapper
      id="hostels"
      title="Hostels & PG Accommodation"
      subtitle="PG rooms, hostels and co-living spaces across Noida — with price, amenities and availability"
      icon="🏠"
    >
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 mb-8">
        {/* Type filter */}
        <div className="flex flex-wrap gap-1.5">
          {TYPE_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                typeFilter === t
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {t === 'All' ? 'All Types' : t}
            </button>
          ))}
        </div>

        <div className="w-px bg-slate-200 self-stretch hidden sm:block" />

        {/* Gender filter */}
        <div className="flex flex-wrap gap-1.5">
          {GENDER_FILTERS.map((g) => (
            <button
              key={g}
              onClick={() => setGenderFilter(g)}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                genderFilter === g
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:text-slate-800'
              }`}
            >
              {g === 'All' ? 'Any Gender' : `${genderIcon[g]} ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((h) => (
          <Card key={h.id} className="flex flex-col p-5 gap-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-snug flex-1">{h.name}</h3>
              <Badge variant={typeBadge[h.type]}>{h.type}</Badge>
            </div>

            {/* Gender + price row */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${genderColor[h.gender]}`}>
                {genderIcon[h.gender]} {h.gender}
              </span>
              <span className="text-base font-bold text-indigo-600">{h.priceRange}</span>
            </div>

            {/* Location */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(h.name + ' ' + h.location + ' Noida')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-500 no-underline hover:text-indigo-600 transition-colors"
            >
              <MapPin size={13} className="shrink-0" />
              {h.location}
            </a>

            {/* Food */}
            <div className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg w-fit ${
              h.foodIncluded
                ? 'bg-green-50 text-green-700'
                : 'bg-slate-50 text-slate-500'
            }`}>
              {h.foodIncluded
                ? <><Utensils size={11} /> Meals included</>
                : <><UtensilsCrossed size={11} /> Self-catering</>
              }
            </div>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1.5">
              {h.amenities.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1 text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-full"
                >
                  {a === 'WiFi' && <Wifi size={9} />}
                  {a}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{h.description}</p>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
              {h.phone ? (
                <a
                  href={`tel:${h.phone}`}
                  className="flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:text-indigo-700 no-underline"
                >
                  <Phone size={13} />
                  {h.phone}
                </a>
              ) : (
                <span className="text-xs text-slate-400">Contact on visit</span>
              )}
              <StarRatingSmall rating={h.rating} />
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400">
          <p className="text-4xl mb-3">🏠</p>
          <p className="text-sm">No results for this combination. Try a different filter.</p>
        </div>
      )}
    </SectionWrapper>
  );
}
