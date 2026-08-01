// mobile-platforms.ts

// Type for supported mobile/tablet platforms
export type MobilePlatform = 'ios' | 'ipad' | 'iphone' | 'android' | 'phablet' | 'tablet' | 'hybrid';

// Platform check functions (adapted from Ionic’s PLATFORMS_MAP)
export const IS_IPAD = (win: Window): boolean => {
  return testUserAgent(win, /iPad/i);
};

export const IS_IPHONE = (win: Window): boolean => {
  return testUserAgent(win, /iPhone/i);
};

export const IS_IOS = (win: Window): boolean => {
  return testUserAgent(win, /iPhone|iPad|iPod/i);
};

export const IS_ANDROID = (win: Window): boolean => {
  return testUserAgent(win, /android/i);
};

export const IS_PHABLET = (win: Window): boolean => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const min = Math.min(width, height);
  const max = Math.max(width, height);
  return (min > 460 && min < 820) && (max > 780 && max < 1400); // Phablet size range
};

export const IS_TABLET = (win: Window): boolean => {
  const width = win.innerWidth;
  const height = win.innerHeight;
  const min = Math.min(width, height);
  const max = Math.max(width, height);
  return min > 720 || max > 1080; // Tablet size threshold
};

export const IS_HYBRID = (win: Window): boolean => {
  return IS_CORDOVA(win) || IS_CAPACITOR(win);
};

export const IS_CORDOVA = (win: any): boolean => {
  return !!(win['cordova'] || win['phonegap'] || win['PhoneGap']);
};

export const IS_CAPACITOR = (win: any): boolean => {
  return !!win['Capacitor'];
};

// Utility to test user agent (from Ionic’s testUserAgent)
export const testUserAgent = (win: Window, expr: RegExp): boolean => {
  return expr.test(win.navigator.userAgent);
};

// Map of mobile/tablet platforms to their check functions
const MOBILE_PLATFORMS_MAP: Record<MobilePlatform, (win: Window) => boolean> = {
  ios: IS_IOS,
  ipad: IS_IPAD,
  iphone: IS_IPHONE,
  android: IS_ANDROID,
  phablet: IS_PHABLET,
  tablet: IS_TABLET,
  hybrid: IS_HYBRID,
};

// Function to get all detected mobile platforms
export const getMobilePlatforms = (win: Window = window): MobilePlatform[] => {
  return Object.keys(MOBILE_PLATFORMS_MAP)
    .filter((platform) => MOBILE_PLATFORMS_MAP[platform as MobilePlatform](win)) as MobilePlatform[];
};

// Function to check if a specific platform matches
export const isMobilePlatform = (platform: MobilePlatform, win: Window = window): boolean => {
  return MOBILE_PLATFORMS_MAP[platform](win);
};
