import { Phone, Clock, Globe, MapPin } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Badge } from './ui/Badge';
import { governmentOffices } from '../data/government';

export function GovernmentSection() {
  return (
    <SectionWrapper
      id="government"
      title="Government Services"
      subtitle="Key government offices in Noida — authority, RTO, passport, courts, and more"
      icon="🏛️"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {governmentOffices.map((office) => (
          <div
            key={office.id}
            className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-3">
              <h3 className="font-bold text-slate-900 text-base leading-tight mb-0.5">{office.name}</h3>
              <p className="text-indigo-600 text-xs font-medium">{office.department}</p>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4">{office.description}</p>

            {/* Services */}
            <div className="mb-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Services</p>
              <div className="flex flex-wrap gap-1.5">
                {office.services.map((s) => (
                  <Badge key={s} variant="default">{s}</Badge>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="border-t border-slate-100 pt-3 flex flex-col gap-1.5 text-xs text-slate-500">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(office.name + ' ' + office.location + ' Noida')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 no-underline hover:text-indigo-600 hover:underline transition-colors"
              >
                <MapPin size={12} className="text-indigo-400 shrink-0" />
                {office.location}
              </a>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1.5 text-indigo-600 font-medium no-underline hover:text-indigo-800"
                >
                  <Phone size={12} />
                  {office.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-slate-400" />
                  {office.timings}
                </span>
              </div>
              {office.website && (
                <a
                  href={office.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-indigo-500 no-underline hover:text-indigo-700 w-fit"
                >
                  <Globe size={12} />
                  {office.website.replace('https://', '')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
