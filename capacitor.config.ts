import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sdis.app',
  appName: 'PrintDale One',
  webDir: 'www',
  plugins: {
    StatusBar: {
      overlaysWebView: false,
    },
    Filesystem: {
      android: {
        permissions: [
          'android.permission.WRITE_EXTERNAL_STORAGE',
          'android.permission.READ_EXTERNAL_STORAGE',
          'android.permission.MANAGE_EXTERNAL_STORAGE'
        ]
      }
    },
    SplashScreen: {
      launchShowDuration: 2000, // Show the splash screen for 3 seconds
      launchAutoHide: true, // Automatically hide the splash screen after launchShowDuration
      showSpinner: false, // Disable the loading spinner
      androidSplashResourceName: 'splash', // Name of the splash drawable resource in Android
      splashFullScreen: true, // Full-screen splash on Android (pre-Android 12)
      splashImmersive: true // Hide status/navigation bars during splash
    }
  },
};

export default config;
