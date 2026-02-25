import { useState, useCallback } from 'react';

type GeoState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; lat: number; lng: number }
  | { status: 'error'; message: string };

export function useGeolocation() {
  const [state, setState] = useState<GeoState>({ status: 'idle' });

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ status: 'error', message: 'Geolocation is not supported by your browser.' });
      return;
    }
    setState({ status: 'loading' });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setState({ status: 'success', lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => {
        let message = 'Could not get your location.';
        if (err.code === err.PERMISSION_DENIED) message = 'Location access was denied.';
        else if (err.code === err.TIMEOUT) message = 'Location request timed out.';
        setState({ status: 'error', message });
      },
      { timeout: 10000, maximumAge: 300000 },
    );
  }, []);

  return { state, request };
}
