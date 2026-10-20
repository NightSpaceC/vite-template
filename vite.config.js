import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  resolve: {
    extensions: [],
  },
  html: {
    cspNonce: '{{ nonce }}',
  },
  json: {
    stringify: false,
  },
  clearScreen: false,

  server: {
    forwardConsole: false,
  },

  build: {
    sourcemap: true,
  },
});
