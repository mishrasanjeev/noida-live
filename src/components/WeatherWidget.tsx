import { useWeather, wmoToInfo } from '../hooks/useWeather';
import { useAqi, aqiToInfo } from '../hooks/useAqi';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './ui/Card';
import { Droplets, Wind, Thermometer, CloudRain } from 'lucide-react';

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
      <div className="text-indigo-500">{icon}</div>
      <span className="text-xs text-slate-500 font-medium">{label}</span>
      <span className="text-sm font-semibold text-slate-800">{value}</span>
    </div>
  );
}

export function WeatherWidget() {
  const weather = useWeather();
  const aqi = useAqi();

  return (
    <SectionWrapper
      id="weather"
      title="Live Weather & Air Quality"
      subtitle="Current conditions, AQI, and 14-day forecast for Noida — powered by Open-Meteo"
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
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Row 1: Current + AQI */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Current conditions */}
              <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-indigo-200 text-sm font-medium">📍 Noida, Uttar Pradesh</p>
                    <div className="flex items-end gap-2 mt-3">
                      <span className="text-4xl sm:text-6xl font-bold">{Math.round(current.temperature_2m)}°</span>
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
                  <StatItem icon={<Droplets size={16} />} label="Humidity" value={`${current.relative_humidity_2m}%`} />
                  <StatItem icon={<Wind size={16} />} label="Wind" value={`${Math.round(current.wind_speed_10m)} km/h`} />
                  <StatItem icon={<Thermometer size={16} />} label="Precipitation" value={`${current.precipitation} mm`} />
                </div>
              </Card>

              {/* AQI card */}
              <Card className="p-6 flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Air Quality Index</h3>

                {aqi.status === 'loading' && (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                  </div>
                )}

                {aqi.status === 'error' && (
                  <p className="text-sm text-slate-400">AQI unavailable</p>
                )}

                {aqi.status === 'success' && (() => {
                  const { us_aqi, pm2_5, pm10 } = aqi.data.current;
                  const info = aqiToInfo(us_aqi);
                  return (
                    <div className="flex flex-col gap-4">
                      {/* Big AQI number */}
                      <div className={`flex items-center gap-4 p-4 rounded-2xl ring-1 ${info.bg} ${info.ring}`}>
                        <span className="text-4xl">{info.emoji}</span>
                        <div>
                          <div className={`text-4xl font-extrabold leading-none ${info.color}`}>{us_aqi}</div>
                          <div className={`text-sm font-semibold mt-0.5 ${info.color}`}>{info.label}</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{info.description}</p>

                      {/* PM breakdown */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-50 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-slate-700">{pm2_5.toFixed(1)}</div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">PM2.5 μg/m³</div>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-slate-700">{pm10.toFixed(1)}</div>
                          <div className="text-[10px] text-slate-400 font-medium mt-0.5">PM10 μg/m³</div>
                        </div>
                      </div>

                      {/* AQI scale bar */}
                      <div>
                        <div className="h-2 rounded-full overflow-hidden flex">
                          <div className="flex-1 bg-green-400" />
                          <div className="flex-1 bg-yellow-400" />
                          <div className="flex-1 bg-orange-400" />
                          <div className="flex-1 bg-red-500" />
                          <div className="flex-1 bg-purple-500" />
                          <div className="flex-1 bg-rose-900" />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                          <span>Good</span><span>Moderate</span><span>Unhealthy</span><span>Hazardous</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </Card>
            </div>

            {/* Row 2: 14-day forecast */}
            <Card className="p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                📅 14-Day Forecast
              </h3>
              <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
                <div className="flex gap-2 pb-2" style={{ minWidth: 'max-content' }}>
                  {daily.time.map((day, i) => {
                    const { icon: dayIcon } = wmoToInfo(daily.weather_code[i]);
                    const isToday = i === 0;
                    const precip = daily.precipitation_sum[i];
                    return (
                      <div
                        key={day}
                        className={`flex flex-col items-center gap-1.5 px-3 py-3 rounded-2xl min-w-[72px] transition-colors ${
                          isToday
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className={`text-[11px] font-semibold ${isToday ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {isToday ? 'Today' : new Date(day).toLocaleDateString('en-IN', { weekday: 'short' })}
                        </span>
                        <span className={`text-[10px] ${isToday ? 'text-indigo-300' : 'text-slate-400'}`}>
                          {new Date(day).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                        <span className="text-2xl leading-none">{dayIcon}</span>
                        <span className={`text-sm font-bold ${isToday ? 'text-white' : 'text-slate-800'}`}>
                          {Math.round(daily.temperature_2m_max[i])}°
                        </span>
                        <span className={`text-xs ${isToday ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {Math.round(daily.temperature_2m_min[i])}°
                        </span>
                        {precip > 0 && (
                          <div className={`flex items-center gap-0.5 text-[10px] ${isToday ? 'text-indigo-200' : 'text-blue-500'}`}>
                            <CloudRain size={9} />
                            {precip.toFixed(1)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
        );
      })()}
    </SectionWrapper>
  );
}
