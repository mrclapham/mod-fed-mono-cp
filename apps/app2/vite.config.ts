import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server:{
    port: 3011
  },
  plugins: [
    federation({
      name: 'app2',
      remotes: {
        app1: 'http://localhost:3000/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});