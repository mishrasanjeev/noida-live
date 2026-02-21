import { MapPin, IndianRupee, ExternalLink } from 'lucide-react';
import { offices } from '../data/offices';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { StarRating } from './ui/StarRating';

export function OfficesSection() {
  return (
    <SectionWrapper
      id="offices"
      title="Office Rental Spaces"
      subtitle="Premium coworking and managed office solutions across Noida's key business corridors"
      icon="🏢"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {offices.map((office) => (
          <Card key={office.id} className="p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">{office.name}</h3>
                <div className="flex items-center gap-1 mt-1 text-slate-500 text-sm">
                  <MapPin size={13} />
                  <span>{office.location}</span>
                </div>
              </div>
              <Badge variant={office.type === 'Coworking' ? 'default' : 'info'}>
                {office.type}
              </Badge>
            </div>

            {/* Rating & Price */}
            <div className="flex items-center justify-between">
              <StarRating rating={office.rating} />
              <div className="flex items-center gap-1 text-indigo-600 font-semibold text-sm">
                <IndianRupee size={13} />
                <span>{office.pricePerDesk}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed">{office.description}</p>

            {/* Amenities */}
            <div className="flex flex-wrap gap-1.5">
              {office.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-2 py-0.5 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href={office.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-50 text-indigo-600 text-sm font-medium hover:bg-indigo-100 transition-colors no-underline"
            >
              Visit Website
              <ExternalLink size={13} />
            </a>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
