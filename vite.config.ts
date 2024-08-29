import { defineConfig } from 'vite';
import globPlugin from 'vite-plugin-glob';

export default defineConfig({
  plugins: [globPlugin()],
});
