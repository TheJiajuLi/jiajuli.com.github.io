import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/jiajuli.com.github.io/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});