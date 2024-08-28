import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

const mdsvexOptions = {
  extensions: ['.md'],
  remarkPlugins: [],
  rehypePlugins: [],
};

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [
    sveltePreprocess(),
    mdsvex(mdsvexOptions)
  ],
  kit: {
    adapter: adapter(),
    paths: {
      base: '/repositoryname',  // Replace 'repositoryname' with your actual repository name
    },
  },
  server: {
    hmr: {
      overlay: false
    }
  }
};
