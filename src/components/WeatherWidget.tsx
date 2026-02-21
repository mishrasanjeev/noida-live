import { useWeather, wmoToInfo, formatDay } from '../hooks/useWeather';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Droplets, Wind, Thermometer, Eye } from 'lucide-react';

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 p-4 bg-white/60 rounded-xl backdrop-blur-sm">
      <div className="text-indigo-500">{icon}</div>
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span className="text-sm font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export function WeatherWidget() {
  const weather = useWeather();

  return (
    <SectionWrapper
      id="weather"
      title="Live Weather"
      subtitle="Current conditions in Noida, Uttar Pradesh — powered by Open-Meteo"
      icon="🌤️"
    >
      {weather.status === 'loading' && (
        <Card className="p-8 flex items-center justify-center gap-3">
          <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-500">Fetching weather data…</span>
        </Card>
      )}

      {weather.status === 'error' && (
        <Card className="p-8 text-center">
          <span className="text-4xl">⚠️</span>
          <p className="mt-3 text-slate-600">Could not load weather: {weather.message}</p>
          <p className="text-sm text-slate-400 mt-1">Check your internet connection and try again.</p>
        </Card>
      )}

      {weather.status === 'success' && (() => {
        const { current, daily } = weather.data;
        const { label, icon } = wmoToInfo(current.weather_code);
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current conditions */}
            <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-0">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-indigo-200 text-sm font-medium">📍 Noida, Uttar Pradesh</p>
                  <div className="flex items-end gap-2 mt-3">
                    <span className="text-6xl font-bold">{Math.round(current.temperature_2m)}°</span>
                    <span className="text-xl text-indigo-200 mb-2">C</span>
                  </div>
                  <p className="text-indigo-100 font-medium mt-1">{label}</p>
                  <p className="text-indigo-200 text-sm mt-0.5">
                    Feels like {Math.round(current.apparent_temperature)}°C
                  </p>
                </div>
                <span className="text-7xl">{icon}</span>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <StatItem
                  icon={<Droplets size={16} />}
                  label="Humidity"
                  value={`${current.relative_humidity_2m}%`}
                />
                <StatItem
                  icon={<Wind size={16} />}
                  label="Wind"
                  value={`${Math.round(current.wind_speed_10m)} km/h`}
                />
                <StatItem
                  icon={<Thermometer size={16} />}
                  label="Precipitation"
                  value={`${current.precipitation} mm`}
                />
              </div>
            </Card>

            {/* 3-day forecast */}
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Eye size={14} />
                3-Day Forecast
              </h3>
              <div className="flex flex-col gap-3">
                {daily.time.map((day, i) => {
                  const { icon: dayIcon, label: dayLabel } = wmoToInfo(daily.weather_code[i]);
                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{dayIcon}</span>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{formatDay(day)}</p>
                          <p className="text-xs text-slate-400">{dayLabel}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-slate-800">
                          {Math.round(daily.temperature_2m_max[i])}°
                        </span>
                        <span className="text-sm text-slate-400 ml-1">
                          / {Math.round(daily.temperature_2m_min[i])}°
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        );
      })()}
    </SectionWrapper>
  );
}
