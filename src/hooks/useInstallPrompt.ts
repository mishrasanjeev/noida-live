import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface InstallPromptState {
  canInstall: boolean;   // Android/Chrome: native prompt available
  isIos: boolean;        // iOS Safari: manual instructions needed
  isInstalled: boolean;  // already running as standalone app
  install: () => void;   // triggers native prompt (no-op on iOS)
}

export function useInstallPrompt(): InstallPromptState {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  const isInstalled =
    typeof window !== 'undefined' &&
    window.matchMedia('(display-mode: standalone)').matches;

  const isIos =
    typeof navigator !== 'undefined' &&
    /iphone|ipad|ipod/i.test(navigator.userAgent) &&
    !isInstalled;

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Hide the button after user installs
  useEffect(() => {
    const handler = () => setPrompt(null);
    window.addEventListener('appinstalled', handler);
    return () => window.removeEventListener('appinstalled', handler);
  }, []);

  const install = () => {
    if (!prompt) return;
    void prompt.prompt();
    void prompt.userChoice.then(() => setPrompt(null));
  };

  return {
    canInstall: !!prompt,
    isIos,
    isInstalled,
    install,
  };
}
