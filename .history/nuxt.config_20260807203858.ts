// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: // nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2026-08-07',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      script: [
        {
          src: 'https://tailwindcss.com', // Pulls Tailwind styling straight to the browser
        }
      ]
    }
  }
})
true }
})
