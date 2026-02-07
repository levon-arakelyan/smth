import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import createSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    createSitemap({
      hostname: 'https://smth-fun.com',
      dynamicRoutes: ['/reach-the-number'],
      generateRobotsTxt: true,
    }),
  ],
  build: {
    target: 'es2019',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
