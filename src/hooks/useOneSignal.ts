import { useState, useEffect } from 'react';

export type NotifState = 'loading' | 'unsupported' | 'subscribed' | 'unsubscribed';

export function useOneSignal() {
  const [state, setState] = useState<NotifState>('loading');

  useEffect(() => {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      setState('unsupported');
      return;
    }

    // Wait for OneSignal SDK to initialise (deferred)
    const check = () => {
      try {
        setState(OneSignal.Notifications.isPushEnabled ? 'subscribed' : 'unsubscribed');
      } catch {
        setState('unsubscribed');
      }
    };

    // SDK loads asynchronously — poll until available
    const id = setInterval(() => {
      if (typeof OneSignal !== 'undefined') {
        clearInterval(id);
        check();
        OneSignal.Notifications.addEventListener('permissionChange', check);
      }
    }, 300);

    return () => clearInterval(id);
  }, []);

  const subscribe = () => {
    try { void OneSignal.Notifications.requestPermission(); } catch { /* ignore */ }
  };

  const unsubscribe = () => {
    try { void OneSignal.Notifications.optOut(); } catch { /* ignore */ }
  };

  return { state, subscribe, unsubscribe };
}
