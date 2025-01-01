import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'gsap': ['gsap'],
          'router': ['react-router-dom'],
          'icons': ['lucide-react']
        }
      }
    },
    minify: 'terser',
    sourcemap: false,
    cssMinify: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public')
    }
  }
});