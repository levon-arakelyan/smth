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
  optimizeDeps: {
    exclude: ['better-react-mathjax'],
  },
  build: {
    target: 'es2019',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
