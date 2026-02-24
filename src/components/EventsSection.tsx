import { useState } from 'react';
import { CalendarDays, MapPin, Star } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { events } from '../data/events';
import type { NoidaEvent } from '../types';

type EventType = 'All' | NoidaEvent['type'];

const typeColors: Record<NoidaEvent['type'], string> = {
  Cultural: 'bg-violet-100 text-violet-700',
  Sports: 'bg-emerald-100 text-emerald-700',
  Religious: 'bg-amber-100 text-amber-700',
  Commercial: 'bg-sky-100 text-sky-700',
  Music: 'bg-pink-100 text-pink-700',
  Food: 'bg-orange-100 text-orange-700',
};

const filterTypes: EventType[] = ['All', 'Cultural', 'Sports', 'Religious', 'Commercial', 'Music', 'Food'];

export function EventsSection() {
  const [active, setActive] = useState<EventType>('All');

  const featured = events.find((e) => e.isFeatured && (active === 'All' || e.type === active));
  const rest = events.filter((e) => !(e.isFeatured && e === featured) && (active === 'All' || e.type === active));

  return (
    <SectionWrapper
      id="events"
      title="Events & Festivals"
      subtitle="Annual celebrations, cultural fairs, and sporting events that bring Noida to life"
      icon="🎪"
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
            {type}
          </button>
        ))}
      </div>

      {/* Featured event */}
      {featured && (
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white">
          <div className="flex flex-col lg:flex-row">
            <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
              <img
                src={featured.imageUrl}
                alt={featured.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-white text-xs font-bold uppercase tracking-wide shadow">
                  ⭐ Featured
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[featured.type]}`}>
                  {featured.type}
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{featured.name}</h3>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500 mb-3">
                <span className="flex items-center gap-1">
                  <CalendarDays size={14} className="text-indigo-400" />
                  {featured.dateRange}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-indigo-400" />
                  {featured.location}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{featured.description}</p>
              <div className="flex flex-wrap gap-2">
                {featured.highlights.map((h) => (
                  <span key={h} className="flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">
                    <Star size={10} className="fill-indigo-400 text-indigo-400" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event cards grid */}
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {rest.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${typeColors[event.type]}`}>
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 text-base mb-1 leading-tight">{event.name}</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 mb-2">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={12} />
                    {event.dateRange}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {event.sector}
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-2">{event.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {event.highlights.slice(0, 3).map((h) => (
                    <Badge key={h} variant="default">{h}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400 py-12">No events found for this category.</p>
      )}
    </SectionWrapper>
  );
}
