import { useState, useEffect } from 'react';
import type { AqiState, AqiApiResponse } from '../types';

const AQI_URL =
  'https://air-quality-api.open-meteo.com/v1/air-quality' +
  '?latitude=28.5355&longitude=77.3910' +
  '&current=us_aqi,pm2_5,pm10,european_aqi' +
  '&timezone=Asia%2FKolkata';

export interface AqiInfo {
  label: string;
  description: string;
  color: string;      // Tailwind text color
  bg: string;         // Tailwind bg color
  ring: string;       // Tailwind ring color
  emoji: string;
}

/**
 * Cap AQI to the standard US EPA scale (0–500).
 * Open-Meteo sometimes returns uncapped extended values (e.g. 1500+)
 * which are non-standard and confuse users.
 */
export function clampAqi(raw: number): number {
  return Math.min(Math.max(Math.round(raw), 0), 500);
}

export function aqiToInfo(aqi: number): AqiInfo {
  const clamped = clampAqi(aqi);
  if (clamped <= 50)  return { label: 'Good',                      description: 'Air quality is satisfactory',          color: 'text-green-700',  bg: 'bg-green-50',   ring: 'ring-green-200',  emoji: '😊' };
  if (clamped <= 100) return { label: 'Moderate',                  description: 'Acceptable; some pollutants present',  color: 'text-yellow-700', bg: 'bg-yellow-50',  ring: 'ring-yellow-200', emoji: '😐' };
  if (clamped <= 150) return { label: 'Unhealthy for Sensitive',   description: 'Sensitive groups may be affected',     color: 'text-orange-700', bg: 'bg-orange-50',  ring: 'ring-orange-200', emoji: '😷' };
  if (clamped <= 200) return { label: 'Unhealthy',                 description: 'Everyone may experience effects',      color: 'text-red-700',    bg: 'bg-red-50',     ring: 'ring-red-200',    emoji: '🤧' };
  if (clamped <= 300) return { label: 'Very Unhealthy',            description: 'Health alert — avoid prolonged outdoor activity', color: 'text-purple-700', bg: 'bg-purple-50', ring: 'ring-purple-200', emoji: '😨' };
  return               { label: 'Hazardous',                       description: 'Emergency conditions — stay indoors',  color: 'text-rose-900',   bg: 'bg-rose-50',    ring: 'ring-rose-300',   emoji: '☠️' };
}

export function useAqi(): AqiState {
  const [state, setState] = useState<AqiState>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();

    const fetchAqi = async () => {
      try {
        const response = await fetch(AQI_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = (await response.json()) as AqiApiResponse;
        setState({ status: 'success', data });
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
