import { useState } from 'react';
import { MapPin, GraduationCap, IndianRupee } from 'lucide-react';
import { schools } from '../data/schools';
import type { School } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type TypeFilter = School['type'] | 'All';

const ALL_TYPES: TypeFilter[] = ['All', 'School', 'College', 'University'];

const typeBadgeVariant: Record<School['type'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  School: 'success',
  College: 'info',
  University: 'accent',
};

export function SchoolsSection() {
  const [active, setActive] = useState<TypeFilter>('All');

  const filtered = active === 'All' ? schools : schools.filter((s) => s.type === active);

  return (
    <SectionWrapper
      id="schools"
      title="Schools & Education"
      subtitle="Leading educational institutions — schools, colleges, and universities in Noida"
      icon="🎓"
    >
      {/* Filter bar */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setActive(type)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              active === type
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filtered.map((school) => (
          <Card key={school.id} className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-snug flex-1">{school.name}</h3>
              <Badge variant={typeBadgeVariant[school.type]}>{school.type}</Badge>
            </div>

            {/* Board pill */}
            <span className="self-start text-xs bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-0.5 rounded-full font-medium -mt-2">
              {school.board}
            </span>

            {/* Grades */}
            <div className="flex items-center gap-1.5 text-slate-600 text-sm">
              <GraduationCap size={13} className="text-slate-400 shrink-0" />
              <span>{school.grades}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin size={13} className="shrink-0" />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(school.name + ' ' + school.location + ' Noida')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                {school.location}
              </a>
            </div>

            {/* Fees */}
            <div className="flex items-center gap-1 text-indigo-600 font-semibold text-sm">
              <IndianRupee size={13} />
              <span>{school.fees}</span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5">
              {school.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-full font-medium"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{school.description}</p>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400">Est. {school.established}</span>
              <StarRating rating={school.rating} />
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No institutions in this category.</div>
      )}
    </SectionWrapper>
  );
}
