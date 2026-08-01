import { Environment } from "src/app/interfaces/environment";

export const environment: Environment = {
  PRODUCTION: true,
  ENVIRONMENT_TYPE: 'prod',
  API_BASE_URL: 'https://api.sdisprojects.in',
  WEBSOCKET_URL: 'ws://api.sdisprojects.in/',  // ← NEW: Dedicated WS URL
  VERSION: '1.0.0'
};
// pagekite.py 3000 sdis.pagekite.me

// sudo cloudflared service install eyJhIjoiNDQ0NDI4YWI4OTM1NjI3YWFlMmM3NzI3MjA5NzUxZDYiLCJ0IjoiYjM2ZWZlNWQtMmYyZS00MzU2LTgzM2ItNTMwMjgzMjNkYTEwIiwicyI6Ik9XWTNaR0V6TURFdE5tRmtOQzAwWVdabUxXSmxZVEF0Wm1OaFpEbG1aR1prWVRGbCJ9
