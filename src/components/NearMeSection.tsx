import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Loader2, AlertCircle } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { useGeolocation } from '../hooks/useGeolocation';
import { parkingPlaces, gymPlaces, petrolPlaces, medicalPlaces, distanceKm } from '../data/nearme';
import type { NearMePlace } from '../types';

type Category = 'parking' | 'gym' | 'petrol' | 'medical';

const CATEGORIES: { id: Category; label: string; icon: string; data: NearMePlace[] }[] = [
  { id: 'parking', label: 'Parking', icon: '🅿️', data: parkingPlaces },
  { id: 'gym', label: 'Gym', icon: '💪', data: gymPlaces },
  { id: 'petrol', label: 'Petrol', icon: '⛽', data: petrolPlaces },
  { id: 'medical', label: 'Medical', icon: '💊', data: medicalPlaces },
];

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
}

function DistanceBadge({ km }: { km: number }) {
  const label = formatDistance(km);
  const isNear = km < 1;
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
        isNear
          ? 'bg-green-100 text-green-700'
          : 'bg-slate-100 text-slate-600'
      }`}
    >
      {label}
    </span>
  );
}

export function NearMeSection() {
  const { state, request } = useGeolocation();
  const [activeCategory, setActiveCategory] = useState<Category>('parking');

  const activeCat = CATEGORIES.find((c) => c.id === activeCategory)!;
  const userLat = state.status === 'success' ? state.lat : null;
  const userLng = state.status === 'success' ? state.lng : null;

  const places = [...activeCat.data].sort((a, b) => {
    if (userLat == null || userLng == null) return 0;
    return distanceKm(userLat, userLng, a.lat, a.lng) - distanceKm(userLat, userLng, b.lat, b.lng);
  });

  return (
    <SectionWrapper
      id="near-me"
      title="Near Me"
      subtitle="Parking, gyms, petrol pumps & medical stores sorted by distance from you"
      icon="🧭"
    >
      {/* Location button */}
      <div className="mb-6">
        {state.status === 'idle' && (
          <button
            onClick={request}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <MapPin size={15} />
            Enable Location for distance sorting
          </button>
        )}

        {state.status === 'loading' && (
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
            <Loader2 size={15} className="animate-spin" />
            Getting your location…
          </div>
        )}

        {state.status === 'success' && (
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100">
            <MapPin size={15} />
            Location found · showing closest first
          </div>
        )}

        {state.status === 'error' && (
          <div className="flex items-start gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-50 text-red-600 text-sm font-medium border border-red-100">
              <AlertCircle size={15} />
              {state.message}
            </div>
            <button
              onClick={request}
              className="text-xs text-indigo-600 underline underline-offset-2 hover:text-indigo-800 self-center"
            >
              Try again
            </button>
          </div>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {places.map((place) => {
          const dist =
            userLat != null && userLng != null
              ? distanceKm(userLat, userLng, place.lat, place.lng)
              : null;

          return (
            <Card key={place.id} className="flex flex-col gap-3 p-5">
              {/* Name + distance */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-base leading-snug flex-1">{place.name}</h3>
                {dist != null && <DistanceBadge km={dist} />}
              </div>

              {/* Address */}
              <a
                href={`https://maps.google.com/?q=${place.lat},${place.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-1.5 text-slate-500 text-sm no-underline hover:text-indigo-600 transition-colors group"
              >
                <MapPin size={13} className="mt-0.5 shrink-0 group-hover:text-indigo-500" />
                <span>{place.address}</span>
              </a>

              {/* Hours */}
              {place.hours && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock size={11} className="shrink-0" />
                  <span>{place.hours}</span>
                </div>
              )}

              {/* Footer */}
              <div className="pt-3 border-t border-slate-50 flex items-center justify-between gap-3 mt-auto">
                {place.phone ? (
                  <a
                    href={`tel:${place.phone}`}
                    className="flex items-center gap-1.5 text-sm text-indigo-600 font-medium hover:text-indigo-700 no-underline"
                  >
                    <Phone size={13} />
                    {place.phone}
                  </a>
                ) : (
                  <span />
                )}
                <a
                  href={`https://maps.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-800 no-underline"
                >
                  <Navigation size={12} />
                  Directions →
                </a>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
