// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-08-09',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  future: {
    compatibilityVersion: 4,
  },

 components: [
  { path: '~/components/global', pathPrefix: true },
  { path: '~/components/home', pathPrefix: true },
  { path: '~/components/ourservices', pathPrefix: true },
  { path: '~/components/products', pathPrefix: true },
  { path: '~/components/safety', pathPrefix: true },
  { path: '~/components/training', pathPrefix: true }
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
