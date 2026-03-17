/**
 * AQI helper utilities.
 *
 * All free AQI APIs (WAQI, OpenAQ, IQAir) require authentication tokens.
 * Open-Meteo's model-based AQI is inaccurate for Noida (returned 1531 when real was ~139).
 *
 * Instead of showing wrong data, the WeatherWidget links directly to AQICN's
 * Noida page which displays real CPCB ground-station data — the same source
 * used by iPhone Weather and other accurate apps.
 *
 * AQICN Noida: https://aqicn.org/city/india/noida/sector-125/
 */

export interface AqiInfo {
  label: string;
  color: string;
  bg: string;
  emoji: string;
}

/** Colour-code an AQI value (used if a WAQI token is added in the future). */
export function aqiToInfo(aqi: number): AqiInfo {
  if (aqi <= 50)  return { label: 'Good',                    color: 'text-green-700',  bg: 'bg-green-100',  emoji: '😊' };
  if (aqi <= 100) return { label: 'Moderate',                color: 'text-yellow-700', bg: 'bg-yellow-100', emoji: '😐' };
  if (aqi <= 150) return { label: 'Unhealthy for Sensitive', color: 'text-orange-700', bg: 'bg-orange-100', emoji: '😷' };
  if (aqi <= 200) return { label: 'Unhealthy',               color: 'text-red-700',    bg: 'bg-red-100',    emoji: '🤧' };
  if (aqi <= 300) return { label: 'Very Unhealthy',          color: 'text-purple-700', bg: 'bg-purple-100', emoji: '😨' };
  return           { label: 'Hazardous',                     color: 'text-rose-900',   bg: 'bg-rose-100',   emoji: '☠️' };
}

/** Direct link to real-time CPCB data for Noida on AQICN. */
export const NOIDA_AQI_URL = 'https://aqicn.org/city/india/noida/sector-125/';
