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
    // { path: '~/components/ourservices', prefix: 'OurServices' },
    { path: '~/components/products', prefix: 'Products' },
    { path: '~/components/safety', prefix: 'Safety' },
    { path: '~/components/training', prefix: 'Training' },
    { path: '~/components/contact', prefix: 'Contact' }
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      script: []
    }
  },
  nitro: {
    preset: 'cloudflare-pages'
  }
})