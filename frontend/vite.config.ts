// File: frontend/vite.config.ts

import { defineConfig } from 'vite';

// ====================================================== //
// ====================================================== //

export default defineConfig({
  base: './',
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    host: '0.0.0.0',
    port: 5183,
    strictPort: true,
    open: true
  }
});
