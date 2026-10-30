import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths make the site work on GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: './',
});
