import { Phone, Clock } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { emergencyContacts } from '../data/emergency';
import type { EmergencyContact } from '../types';

const typeColors: Record<EmergencyContact['type'], string> = {
  Police: 'bg-blue-50 border-blue-200 hover:border-blue-400',
  Medical: 'bg-red-50 border-red-200 hover:border-red-400',
  Fire: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  Utility: 'bg-slate-50 border-slate-200 hover:border-slate-400',
  Women: 'bg-pink-50 border-pink-200 hover:border-pink-400',
  Child: 'bg-purple-50 border-purple-200 hover:border-purple-400',
  'Control Room': 'bg-emerald-50 border-emerald-200 hover:border-emerald-400',
  Cyber: 'bg-indigo-50 border-indigo-200 hover:border-indigo-400',
};

const numberColors: Record<EmergencyContact['type'], string> = {
  Police: 'text-blue-600',
  Medical: 'text-red-600',
  Fire: 'text-orange-600',
  Utility: 'text-slate-700',
  Women: 'text-pink-600',
  Child: 'text-purple-600',
  'Control Room': 'text-emerald-600',
  Cyber: 'text-indigo-600',
};

export function EmergencySection() {
  return (
    <SectionWrapper
      id="emergency"
      title="Emergency & Helplines"
      subtitle="Quick-dial contacts for police, medical, utilities, and citizen services — available 24×7"
      icon="🚨"
    >
      {/* Alert bar */}
      <div className="mb-8 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
        <span className="text-2xl">🆘</span>
        <div>
          <p className="font-bold text-red-700 text-sm">In a life-threatening emergency, always call 112</p>
          <p className="text-red-600 text-xs mt-0.5">UP 112 dispatches Police, Fire & Ambulance — available 24×7 across all of UP</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {emergencyContacts.map((contact) => (
          <div
            key={contact.id}
            className={`rounded-2xl border-2 p-4 transition-all duration-200 ${typeColors[contact.type]}`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl leading-none mt-0.5">{contact.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <h3 className="font-bold text-slate-900 text-sm leading-tight">{contact.name}</h3>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                    contact.available === '24x7'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    <Clock size={10} />
                    {contact.available}
                  </span>
                </div>
                <p className="text-slate-500 text-xs mb-3 leading-snug">{contact.description}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:${contact.number}`}
                    className={`flex items-center gap-1.5 font-bold text-base no-underline ${numberColors[contact.type]} hover:opacity-80 transition-opacity`}
                  >
                    <Phone size={14} />
                    {contact.number}
                  </a>
                  {contact.altNumber && (
                    <a
                      href={`tel:${contact.altNumber}`}
                      className={`flex items-center gap-1 text-sm font-medium no-underline ${numberColors[contact.type]} opacity-75 hover:opacity-100 transition-opacity`}
                    >
                      <Phone size={12} />
                      {contact.altNumber}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400">
        Save these numbers in your phone. Tap any number to call directly.
      </p>
    </SectionWrapper>
  );
}
