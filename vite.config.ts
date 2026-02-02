import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://smth-fun.com',
      dynamicRoutes: ['/'],
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Something fun',
          description: 'You can always find something fun here!',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router'],
        },
      },
    },
  },
});
