import { useState, useEffect } from 'react';
import type { WeatherState, WeatherApiResponse } from '../types';

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast' +
  '?latitude=28.5355&longitude=77.3910' +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max' +
  '&timezone=Asia%2FKolkata' +
  '&forecast_days=14';

export interface WmoInfo {
  label: string;
  icon: string;
}

export function wmoToInfo(code: number): WmoInfo {
  if (code === 0) return { label: 'Clear Sky', icon: '☀️' };
  if (code === 1) return { label: 'Mainly Clear', icon: '🌤️' };
  if (code === 2) return { label: 'Partly Cloudy', icon: '⛅' };
  if (code === 3) return { label: 'Overcast', icon: '☁️' };
  if (code >= 45 && code <= 48) return { label: 'Foggy', icon: '🌫️' };
  if (code >= 51 && code <= 55) return { label: 'Drizzle', icon: '🌦️' };
  if (code >= 61 && code <= 65) return { label: 'Rain', icon: '🌧️' };
  if (code >= 71 && code <= 77) return { label: 'Snow', icon: '❄️' };
  if (code >= 80 && code <= 82) return { label: 'Rain Showers', icon: '🌦️' };
  if (code >= 85 && code <= 86) return { label: 'Snow Showers', icon: '🌨️' };
  if (code >= 95 && code <= 99) return { label: 'Thunderstorm', icon: '⛈️' };
  return { label: 'Unknown', icon: '🌡️' };
}

export function formatDay(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

export function useWeather(): WeatherState {
  const [state, setState] = useState<WeatherState>({ status: 'loading' });

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        const response = await fetch(WEATHER_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = (await response.json()) as WeatherApiResponse;
        setState({ status: 'success', data });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setState({
          status: 'error',
          message: err instanceof Error ? err.message : 'Failed to load weather',
        });
      }
    };

    void fetchWeather();

    return () => {
      controller.abort();
    };
  }, []);

  return state;
}
