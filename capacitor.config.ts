import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dspace.app',
  appName: 'dspace',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://localhost:3000',
    cleartext: true,
  },
};

export default config;
