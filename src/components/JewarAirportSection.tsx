import { Plane, MapPin, Clock, Calendar } from 'lucide-react';

const timelineSteps = [
  { label: 'Land Acquisition', done: true },
  { label: 'Construction Start', done: true },
  { label: 'Trial Runs', done: false, active: true },
  { label: 'Phase 1 Opening', done: false },
  { label: 'Phase 2 Expansion', done: false },
];

const stats = [
  { label: 'Runways (Phase 1)', value: '2' },
  { label: 'Terminal Capacity', value: '12 M/yr' },
  { label: 'Ultimate Capacity', value: '70 M/yr' },
  { label: 'Cargo Handling', value: '0.5 M tonnes' },
];

const keyFacts = [
  { icon: MapPin, label: 'Location', value: 'Jewar, Gautam Buddha Nagar' },
  { icon: Clock, label: 'From Noida City', value: '~40 km · ~45 min' },
  { icon: Calendar, label: 'Phase 1 Target', value: '2025–2026' },
  { icon: Plane, label: 'IATA Code', value: 'DXN (proposed)' },
];

export function JewarAirportSection() {
  return (
    <section id="jewar-airport" className="scroll-mt-20 py-16 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">✈️</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Jewar Airport</h2>
          </div>
          <p className="text-indigo-300 text-base mt-1 max-w-2xl">
            Noida International Airport — India's largest greenfield airport under construction, set to transform the NCR region
          </p>
          <div className="mt-4 h-1 w-12 sm:w-16 rounded-full bg-indigo-500" />
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Left — key facts */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Noida International Airport</h3>
              <p className="text-indigo-300 text-sm mb-4">
                Being developed by Zurich Airport International AG in partnership with the Uttar Pradesh government, the Noida International Airport at Jewar is set to become India's largest airport by ultimate capacity — relieving pressure on IGI Delhi and serving the booming NCR region.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strategically located along the Yamuna Expressway, it will serve millions of passengers from Noida, Greater Noida, Agra, and western UP. Phase 1 will handle 12 million passengers per year, with expansion up to 70 million per year across all phases.
              </p>
            </div>

            {/* Key facts list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {keyFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Icon size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-indigo-300 font-medium">{label}</p>
                    <p className="text-sm text-white font-semibold">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Greenfield Airport', 'Zurich Airport AG', 'Phase 1: 12M pax/yr', 'UDAN Scheme', '~₹29,560 Cr Project', 'Cargo Hub'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-indigo-400/40 text-indigo-300 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-semibold text-indigo-300 uppercase tracking-wide">Key Figures</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/5 border border-white/10 text-center gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">{value}</span>
                  <span className="text-xs text-indigo-300 font-medium leading-snug">{label}</span>
                </div>
              ))}
            </div>

            {/* Developer info */}
            <div className="p-5 rounded-xl bg-indigo-900/40 border border-indigo-800/50">
              <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wide mb-2">Developer</p>
              <p className="text-white font-bold text-base">Zurich Airport International AG</p>
              <p className="text-indigo-300 text-sm mt-1">In partnership with YEIDA (Yamuna Expressway Industrial Development Authority)</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wide mb-6">Project Timeline</h3>
          <div className="flex flex-wrap sm:flex-nowrap items-start gap-0">
            {timelineSteps.map((step, i) => (
              <div key={step.label} className="flex-1 flex flex-col items-center min-w-[80px]">
                {/* Connector + dot */}
                <div className="w-full flex items-center">
                  <div className={`h-px flex-1 ${i === 0 ? 'opacity-0' : step.done ? 'bg-indigo-400' : 'bg-white/15'}`} />
                  <div
                    className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      step.done
                        ? 'bg-indigo-500 border-indigo-400'
                        : step.active
                        ? 'bg-amber-500 border-amber-400 ring-2 ring-amber-500/30'
                        : 'bg-transparent border-white/20'
                    }`}
                  >
                    {step.done && <span className="text-white text-[8px] font-bold">✓</span>}
                  </div>
                  <div className={`h-px flex-1 ${i === timelineSteps.length - 1 ? 'opacity-0' : step.done ? 'bg-indigo-400' : 'bg-white/15'}`} />
                </div>
                <p className={`text-center text-xs mt-2 font-medium leading-snug max-w-[80px] ${step.done ? 'text-indigo-300' : step.active ? 'text-amber-300' : 'text-slate-500'}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
