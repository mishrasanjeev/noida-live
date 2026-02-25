// Global declarations for scripts loaded via index.html
declare function gtag(command: string, action: string, params?: Record<string, string | number | boolean>): void;

// OneSignal Web SDK v16
interface OneSignalNotifications {
  isPushEnabled: boolean;
  requestPermission(): Promise<void>;
  optIn(): Promise<void>;
  optOut(): Promise<void>;
  addEventListener(event: 'permissionChange', handler: (permission: boolean) => void): void;
  removeEventListener(event: 'permissionChange', handler: (permission: boolean) => void): void;
}
interface OneSignalInstance {
  Notifications: OneSignalNotifications;
}
declare const OneSignal: OneSignalInstance;
declare interface Window {
  OneSignalDeferred: ((instance: OneSignalInstance) => void | Promise<void>)[];
}
