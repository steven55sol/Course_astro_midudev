// @ts-check
import { defineConfig, envField} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


import vercel from '@astrojs/vercel';


export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
        alias: {
          '@': new URL('./src', import.meta.url).pathname,
        },
      }
  },

  env:{
    schema:{
      SHOW_BUY_BUTTON: envField.boolean({context:'server', access:'public'}),
      SCORE_API_ENDPOINT: envField.string({context:'server', access:'public'}) 
    }
    },

  adapter: vercel()
});