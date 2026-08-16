// nuxt.config.ts
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

  app: {
    head: {
      script: [
        { 
          src: 'https://jsdelivr.net',
          // FIX: Overrides the browser cross-origin policy to force styles to process
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
