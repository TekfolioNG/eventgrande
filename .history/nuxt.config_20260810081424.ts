// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-09',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  components: [
    { path: '~/components/global', prefix: 'Global' },
    { path: '~/components/home', prefix: 'Home' },
    { path: '~/components/ourservices', prefix: 'OurServices' },
    { path: '~/components/products', prefix: 'Products' },
    { path: '~/components/safety', prefix: 'Safety' },
    { path: '~/components/training', prefix: 'Training' }
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      script: [
        // removed the jsdelivr.net tag — it's not a valid Tailwind CDN link
        // and isn't needed once @tailwindcss/vite is running
      ]
    }
  }
})