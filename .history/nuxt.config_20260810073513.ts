// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-08-09',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  future: {
    compatibilityVersion: 4,
  },

  components: [
    { path: '~/components/global' },
    { path: '~/components/home' },
    { path: '~/components/ourservices' },
    { path: '~/components/products' },
    { path: '~/components/safety' },
    { path: '~/components/training' }
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
