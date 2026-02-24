import { useState } from 'react';
import { MapPin, Clock, Tag } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { localMarkets } from '../data/markets';
import type { LocalMarket } from '../types';

type MarketType = 'All' | LocalMarket['type'];

const typeIcon: Record<LocalMarket['type'], string> = {
  'Weekly Bazaar': '🗓️',
  'Daily Market': '🛒',
  'Shopping Complex': '🏬',
  Specialty: '⭐',
};

const typeColors: Record<LocalMarket['type'], string> = {
  'Weekly Bazaar': 'bg-amber-100 text-amber-700',
  'Daily Market': 'bg-emerald-100 text-emerald-700',
  'Shopping Complex': 'bg-indigo-100 text-indigo-700',
  Specialty: 'bg-violet-100 text-violet-700',
};

const filterTypes: MarketType[] = ['All', 'Shopping Complex', 'Daily Market', 'Weekly Bazaar', 'Specialty'];

export function MarketsSection() {
  const [active, setActive] = useState<MarketType>('All');

  const filtered = active === 'All' ? localMarkets : localMarkets.filter((m) => m.type === active);

  return (
    <SectionWrapper
      id="markets"
      title="Local Markets & Bazaars"
      subtitle="From sector daily markets to weekend haats — shop local across Noida"
      icon="🛒"
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
            {type !== 'All' && <span className="mr-1">{typeIcon[type as LocalMarket['type']]}</span>}
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((market) => (
          <div
            key={market.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-tight mb-1">{market.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[market.type]}`}>
                      {typeIcon[market.type]} {market.type}
                    </span>
                    {market.day && (
                      <span className="text-xs text-amber-600 font-medium">({market.day})</span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">{market.description}</p>

              {/* Popular for */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                  <Tag size={11} />
                  Popular for
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {market.popularFor.map((item) => (
                    <Badge key={item} variant="accent">{item}</Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {market.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-indigo-400 mt-0.5 shrink-0">•</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="border-t border-slate-100 pt-3 flex flex-col gap-1 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} className="text-indigo-400 shrink-0" />
                  {market.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} className="text-indigo-400 shrink-0" />
                  {market.timings}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
