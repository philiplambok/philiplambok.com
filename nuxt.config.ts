// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate', type: 'application/rss+xml', title: "Philip Lambok", href: '/feed.xml' },
      ],
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
