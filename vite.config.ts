import { defineConfig } from 'vite';
import globPlugin from 'vite-plugin-glob';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [globPlugin(), sveltekit()],
});
