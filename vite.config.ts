import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Keeps your existing port
    host: true, // Necessary for Dev Containers
  },
  build: {
    outDir: 'build', // Netlify expects 'build' by default for CRA projects
  }
});