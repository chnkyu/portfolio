import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: https://chnkyu.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
