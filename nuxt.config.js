/* eslint-disable prettier/prettier */
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/repository.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', 
    '@nuxtjs/style-resources', 
    'nuxt-buefy',
    ['nuxt-buefy', { css: false, materialDesignIcons: true }],
  ],

  // axios
  axios: {
    baseURL: 'http://localhost:2019/api',
    headers: {
      common: {
        "Accept": "application/json, text/plain, */*"
      },
      delete: {},
      get: {},
      head: {},
      post: {},
      put: {},
      patch: {}
    }
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    }
  },
}
