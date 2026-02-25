import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useGeolocation } from '../hooks/useGeolocation';
import {
  parkingPlaces,
  gymPlaces,
  petrolPlaces,
  medicalPlaces,
  atmPlaces,
  groceryPlaces,
  autoPlaces,
  distanceKm,
} from '../data/nearme';
import type { NearMePlace } from '../types';

type Category = 'parking' | 'gym' | 'petrol' | 'medical' | 'atm' | 'grocery' | 'auto';

const CATEGORIES: { id: Category; label: string; icon: string; data: NearMePlace[] }[] = [
  { id: 'parking', label: 'Parking', icon: '🅿️', data: parkingPlaces },
  { id: 'atm', label: 'ATM', icon: '🏧', data: atmPlaces },
  { id: 'petrol', label: 'Petrol', icon: '⛽', data: petrolPlaces },
  { id: 'grocery', label: 'Grocery', icon: '🛒', data: groceryPlaces },
  { id: 'medical', label: 'Medical', icon: '💊', data: medicalPlaces },
  { id: 'gym', label: 'Gym', icon: '💪', data: gymPlaces },
  { id: 'auto', label: 'Auto/Cab', icon: '🚖', data: autoPlaces },
];

function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  return `${km.toFixed(1)} km`;
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
    <section
      id="near-me"
      className="scroll-mt-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">🧭</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Near Me</h2>
          <p className="text-indigo-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            ATMs, parking, petrol, groceries & more — sorted by your distance
          </p>
          <div className="mt-4 mx-auto w-12 h-1 rounded-full bg-indigo-500" />
        </div>

        {/* Location CTA */}
        <div className="flex flex-col items-center mb-10 gap-2">
          {state.status === 'idle' && (
            <>
              <div className="relative inline-flex">
                <span className="absolute inset-0 rounded-full bg-indigo-500/50 animate-ping" />
                <button
                  onClick={request}
                  className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-base font-semibold shadow-lg shadow-indigo-900/50 transition-colors"
                >
                  <MapPin size={20} />
                  Enable Location
                </button>
              </div>
              <p className="text-xs text-white/40 mt-1">
                Distances update instantly — nothing is stored
              </p>
            </>
          )}

          {state.status === 'loading' && (
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
              <Loader2 size={16} className="animate-spin text-indigo-300" />
              Locating you…
            </div>
          )}

          {state.status === 'success' && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium">
              <CheckCircle2 size={15} />
              Location active — showing closest first
            </div>
          )}

          {state.status === 'error' && (
            <div className="flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-sm">
                <AlertCircle size={15} />
                {state.message}
              </div>
              <button
                onClick={request}
                className="text-xs text-indigo-300 underline underline-offset-2 hover:text-white transition-colors"
              >
                Try again
              </button>
            </div>
          )}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-1.5 py-3 px-1 rounded-2xl transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-indigo-700 shadow-lg shadow-indigo-900/40 ring-2 ring-indigo-300 scale-105'
                  : 'bg-white/10 text-white/70 border border-white/10 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="text-2xl sm:text-3xl leading-none">{cat.icon}</span>
              <span className="text-[10px] sm:text-xs font-semibold leading-tight text-center">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {places.map((place) => {
            const dist =
              userLat != null && userLng != null
                ? distanceKm(userLat, userLng, place.lat, place.lng)
                : null;

            return (
              <div
                key={place.id}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/15 transition-colors"
              >
                {/* Name + distance */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-white text-base leading-snug flex-1">{place.name}</h3>
                  {dist != null && (
                    <span
                      className={`shrink-0 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        dist < 1
                          ? 'bg-green-400/20 text-green-300'
                          : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {formatDistance(dist)}
                    </span>
                  )}
                </div>

                {/* Address */}
                <a
                  href={`https://maps.google.com/?q=${place.lat},${place.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-1.5 text-indigo-200 text-sm no-underline hover:text-white transition-colors group"
                >
                  <MapPin size={13} className="mt-0.5 shrink-0 group-hover:text-indigo-300" />
                  <span>{place.address}</span>
                </a>

                {/* Hours */}
                {place.hours && (
                  <div className="flex items-center gap-1.5 text-xs text-white/50">
                    <Clock size={11} className="shrink-0" />
                    <span>{place.hours}</span>
                  </div>
                )}

                {/* Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  {place.phone ? (
                    <a
                      href={`tel:${place.phone}`}
                      className="flex items-center gap-1.5 text-sm text-indigo-300 font-medium hover:text-white no-underline transition-colors"
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
                    className="flex items-center gap-1 text-xs font-semibold text-white hover:text-indigo-200 no-underline transition-colors"
                  >
                    <Navigation size={12} />
                    Directions →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
