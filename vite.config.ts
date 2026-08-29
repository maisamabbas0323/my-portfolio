import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite',
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2021',
    sourcemap: false,
    cssMinify: true,
  },
});