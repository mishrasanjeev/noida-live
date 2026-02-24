import { useState } from 'react';
import { MapPin, Phone, BedDouble } from 'lucide-react';
import { hospitals } from '../data/hospitals';
import type { Hospital } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

type TypeFilter = Hospital['type'] | 'All';

const ALL_TYPES: TypeFilter[] = ['All', 'Government', 'Private', 'Specialty', 'Clinic'];

const typeBadgeVariant: Record<Hospital['type'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  Government: 'info',
  Private: 'default',
  Specialty: 'accent',
  Clinic: 'success',
};

export function HospitalsSection() {
  const [active, setActive] = useState<TypeFilter>('All');

  const filtered = active === 'All' ? hospitals : hospitals.filter((h) => h.type === active);

  return (
    <SectionWrapper
      id="hospitals"
      title="Hospitals & Medical"
      subtitle="Top healthcare facilities across Noida — government, private, and speciality"
      icon="🏥"
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
        {filtered.map((hospital) => (
          <Card key={hospital.id} className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-slate-900 text-base leading-snug flex-1">{hospital.name}</h3>
              <Badge variant={typeBadgeVariant[hospital.type]}>{hospital.type}</Badge>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin size={13} className="shrink-0" />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(hospital.name + ' ' + hospital.location + ' Noida')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                {hospital.location}
              </a>
            </div>

            {/* Beds + Emergency */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-slate-600 text-sm">
                <BedDouble size={13} className="text-slate-400" />
                <span>{hospital.beds} beds</span>
              </div>
              {hospital.emergencyAvailable && (
                <span className="text-xs bg-red-50 text-red-600 border border-red-100 px-2.5 py-0.5 rounded-full font-medium">
                  24/7 Emergency
                </span>
              )}
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-1.5">
              {hospital.specialties.map((spec) => (
                <span
                  key={spec}
                  className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-full font-medium"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed flex-1">{hospital.description}</p>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3">
              <a
                href={`tel:${hospital.phone}`}
                className="flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:text-indigo-700 no-underline"
              >
                <Phone size={13} />
                {hospital.phone}
              </a>
              <StarRating rating={hospital.rating} />
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-slate-400">No hospitals in this category.</div>
      )}
    </SectionWrapper>
  );
}
