// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({ 
    vite: { plugins: [tailwindcss()], },
    outDir: '/var/www/html', 
});
