import { useState, useEffect } from 'react';

export function SplashScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const fadeTimer  = setTimeout(() => setFading(true), 1400);
    const removeTimer = setTimeout(() => setGone(true),  1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center
        bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900
        transition-opacity duration-500 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-5 select-none">
        <div className="text-8xl drop-shadow-xl animate-[bounce_1s_ease-in-out_1]">🏙️</div>

        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Noida Live
          </h1>
          <p className="text-indigo-200 mt-2 text-base sm:text-lg font-medium">
            Your complete city guide
          </p>
        </div>

        {/* Bouncing dots */}
        <div className="flex items-center gap-2 mt-2">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="w-2 h-2 rounded-full bg-indigo-300 animate-bounce"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom credit */}
      <p className="absolute bottom-8 text-indigo-400 text-xs tracking-widest uppercase">
        Noida · Uttar Pradesh
      </p>
    </div>
  );
}
