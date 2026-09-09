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
    { path: '~/components/about', prefix: 'About' },
    { path: '~/components/ourservices', prefix: 'Services' },
    { path: '~/components/gallery', prefix: 'Gallery' },
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