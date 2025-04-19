import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tracingpba.transformia.dev',
  // Si quieres SSR más adelante, puedes añadir:
  // output: 'server',
  // adapter: node({
  //   mode: 'standalone'
  // })
});