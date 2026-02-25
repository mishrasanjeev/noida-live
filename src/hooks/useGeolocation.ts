import { useState, useCallback, useEffect } from 'react';

const GEO_FLAG_KEY = 'noida_geo_granted';

type GeoState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; lat: number; lng: number }
  | { status: 'error'; message: string };

export function useGeolocation() {
  const [state, setState] = useState<GeoState>(() =>
    localStorage.getItem(GEO_FLAG_KEY) ? { status: 'loading' } : { status: 'idle' },
  );

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ status: 'error', message: 'Geolocation is not supported by your browser.' });
      return;
    }
    setState({ status: 'loading' });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        try { localStorage.setItem(GEO_FLAG_KEY, '1'); } catch { /* ignore */ }
        setState({ status: 'success', lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          try { localStorage.removeItem(GEO_FLAG_KEY); } catch { /* ignore */ }
          setState({ status: 'error', message: 'Location access was denied.' });
        } else if (err.code === err.TIMEOUT) {
          setState({ status: 'error', message: 'Location request timed out.' });
        } else {
          setState({ status: 'error', message: 'Could not get your location.' });
        }
      },
      { timeout: 10000, maximumAge: 300000 },
    );
  }, []);

  // Auto-request on mount if the user previously granted access
  useEffect(() => {
    if (localStorage.getItem(GEO_FLAG_KEY)) {
      request();
    }
  }, [request]);

  return { state, request };
}
