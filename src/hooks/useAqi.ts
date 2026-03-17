import { useState, useEffect } from 'react';
import type { AqiState } from '../types';

/**
 * WAQI (World Air Quality Index) API — uses real CPCB ground station data.
 * Get a free token at https://aqicn.org/data-platform/token/
 * Set it as VITE_WAQI_TOKEN in .env (or GitHub Actions secret).
 */
const WAQI_TOKEN = import.meta.env.VITE_WAQI_TOKEN as string | undefined;

// Noida Sector 125 CPCB station — fallback to geo-based nearest station
const WAQI_URL = WAQI_TOKEN
  ? `https://api.waqi.info/feed/geo:28.5355;77.3910/?token=${WAQI_TOKEN}`
  : '';

export interface AqiInfo {
  label: string;
  description: string;
  color: string;
  bg: string;
  ring: string;
  emoji: string;
}

export function aqiToInfo(aqi: number): AqiInfo {
  if (aqi <= 50)  return { label: 'Good',                    description: 'Air quality is satisfactory — enjoy outdoor activities',                      color: 'text-green-700',  bg: 'bg-green-50',   ring: 'ring-green-200',  emoji: '😊' };
  if (aqi <= 100) return { label: 'Moderate',                description: 'Acceptable; unusually sensitive people should limit prolonged outdoor effort',  color: 'text-yellow-700', bg: 'bg-yellow-50',  ring: 'ring-yellow-200', emoji: '😐' };
  if (aqi <= 150) return { label: 'Unhealthy for Sensitive', description: 'Sensitive groups (children, elderly, asthmatics) should reduce outdoor activity', color: 'text-orange-700', bg: 'bg-orange-50',  ring: 'ring-orange-200', emoji: '😷' };
  if (aqi <= 200) return { label: 'Unhealthy',               description: 'Everyone may begin to experience health effects — limit outdoor exposure',       color: 'text-red-700',    bg: 'bg-red-50',     ring: 'ring-red-200',    emoji: '🤧' };
  if (aqi <= 300) return { label: 'Very Unhealthy',          description: 'Health alert — everyone should avoid prolonged outdoor activity',                color: 'text-purple-700', bg: 'bg-purple-50',  ring: 'ring-purple-200', emoji: '😨' };
  return           { label: 'Hazardous',                     description: 'Emergency conditions — stay indoors, close windows, use air purifier',           color: 'text-rose-900',   bg: 'bg-rose-50',    ring: 'ring-rose-300',   emoji: '☠️' };
}

export function useAqi(): AqiState {
  const [state, setState] = useState<AqiState>(
    WAQI_TOKEN ? { status: 'loading' } : { status: 'unconfigured' },
  );

  useEffect(() => {
    if (!WAQI_TOKEN) return;

    const controller = new AbortController();

    const fetchAqi = async () => {
      try {
        const response = await fetch(WAQI_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const json = await response.json() as {
          status: string;
          data: {
            aqi: number;
            iaqi?: {
              pm25?: { v: number };
              pm10?: { v: number };
            };
            city?: { name: string };
          };
        };

        if (json.status !== 'ok' || typeof json.data?.aqi !== 'number') {
          throw new Error('Invalid WAQI response');
        }

        setState({
          status: 'success',
          data: {
            aqi: json.data.aqi,
            pm25: json.data.iaqi?.pm25?.v ?? null,
            pm10: json.data.iaqi?.pm10?.v ?? null,
            station: json.data.city?.name ?? 'Noida',
          },
        });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setState({ status: 'error' });
      }
    };

    void fetchAqi();
    return () => controller.abort();
  }, []);

  return state;
}
