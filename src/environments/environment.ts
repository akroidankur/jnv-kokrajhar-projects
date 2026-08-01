// src/environments/environment.ts
import { Environment } from "src/app/interfaces/environment";

export const environment: Environment = {
  PRODUCTION: false,
  ENVIRONMENT_TYPE: 'dev',
  API_BASE_URL: 'http://192.168.1.4:3000',
  WEBSOCKET_URL: 'ws://192.168.1.4:3000',  // ← NEW: Dedicated WS URL
  VERSION: '1.0.0'
};
