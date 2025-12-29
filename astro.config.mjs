import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://j1ah0ng.xyz',
  integrations: [react()],
  output: 'static',
});
