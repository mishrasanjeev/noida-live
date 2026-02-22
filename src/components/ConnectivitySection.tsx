import { Train, Car, MapPin, Clock } from 'lucide-react';
import { connectivityRoutes, distancesFromNoida } from '../data/connectivity';
import type { ConnectivityRoute } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

const typeBadgeVariant: Record<ConnectivityRoute['type'], 'default' | 'accent' | 'success' | 'warning' | 'info'> = {
  Metro: 'info',
  Expressway: 'accent',
  Highway: 'warning',
  Bus: 'default',
  Rail: 'success',
};

const statusBadgeVariant: Record<
  ConnectivityRoute['operationalStatus'],
  'default' | 'accent' | 'success' | 'warning' | 'info'
> = {
  Operational: 'success',
  'Under Construction': 'warning',
  Planned: 'info',
};

const typeIcon = (type: ConnectivityRoute['type']) => {
  if (type === 'Metro' || type === 'Rail') return <Train size={14} className="text-sky-500" />;
  return <Car size={14} className="text-amber-500" />;
};

export function ConnectivitySection() {
  return (
    <SectionWrapper
      id="connectivity"
      title="Connectivity"
      subtitle="Metro lines, expressways, and highways that link Noida to Delhi-NCR and beyond"
      icon="🚇"
    >
      {/* Routes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {connectivityRoutes.map((route) => (
          <Card key={route.id} className="flex flex-col gap-3 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                {typeIcon(route.type)}
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{route.name}</h3>
              </div>
            </div>

            {/* Badges row */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={typeBadgeVariant[route.type]}>{route.type}</Badge>
              <Badge variant={statusBadgeVariant[route.operationalStatus]}>{route.operationalStatus}</Badge>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-500 leading-relaxed">{route.description}</p>

            {/* Key stops */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">Key Stops</p>
              <div className="flex flex-wrap gap-1">
                {route.keyStops.map((stop) => (
                  <span
                    key={stop}
                    className="flex items-center gap-1 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-full"
                  >
                    <MapPin size={9} className="text-slate-400" />
                    {stop}
                  </span>
                ))}
              </div>
            </div>

            {/* Travel time */}
            <div className="flex items-center gap-1.5 text-sm text-indigo-600 font-medium">
              <Clock size={13} />
              <span>{route.travelTime}</span>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50">
              {route.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Distances card */}
      <Card className="p-6">
        <h3 className="font-bold text-slate-900 text-lg mb-1">Distances from Noida</h3>
        <p className="text-slate-500 text-sm mb-5">Approximate travel times to major cities and destinations</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {distancesFromNoida.map((d) => (
            <div key={d.destination} className="flex flex-col gap-1.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1.5">
                <MapPin size={13} className="text-indigo-500 shrink-0" />
                <span className="font-semibold text-slate-800 text-sm">{d.destination}</span>
              </div>
              <span className="text-xs text-slate-400 font-medium pl-5">{d.distance}</span>
              <div className="flex items-start gap-1.5 pl-5">
                <Car size={11} className="text-amber-500 mt-0.5 shrink-0" />
                <span className="text-xs text-slate-600">{d.byRoad}</span>
              </div>
              {d.byTrain && (
                <div className="flex items-start gap-1.5 pl-5">
                  <Train size={11} className="text-sky-500 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-600">{d.byTrain}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </SectionWrapper>
  );
}
