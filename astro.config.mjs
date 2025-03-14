import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), alpinejs({ entrypoint: '/src/astroentry.js' })],
    output: 'static',
    adapter: netlify({
        imageCDN: false
    }),
    vite: {
        plugins: [tailwindcss()]
    }
});
