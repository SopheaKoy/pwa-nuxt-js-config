// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:['@vite-pwa/nuxt'],
  devServer: {
    port: 8000
  },
  app:{

  },
  pwa: {
    manifest: {
      name: "MY PWA APP",
      short_name: "Nuxt3 PWA",
      description: "Testing Nuxt3 PWA",
      scope:'./',
      start_url:'./',
      icons: [
        {
          src: "icon_64x64.0ce032.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icon_144x144.0ce032.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icon_192x192.0ce032.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon_512x512.0ce032.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    devOptions: { enabled: true, type: 'module', navigateFallbackAllowlist: [/^\/$/] },
    client: {
      installPrompt: true
    }
  },
})