// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-23',
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  typescript: {
      strict: true
  },

})