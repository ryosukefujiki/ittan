
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '"ittan" テクノロジーによりファッションの新しい可能性を探索するクリエイティブ集団。' },
      { name: 'keywords', content: 'ittan MetaWindow' },
      { property: 'fb:app_id', content: '448470745767086' },
      { property: 'og:description', content: '"ittan" テクノロジーによりファッションの新しい可能性を探索するクリエイティブ集団。' },
      { property: 'og:image', content: 'https://ittan.design/About/ittan.png' },
      { property: 'og:site_name', content: 'ittan' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:description', content: '"ittan" テクノロジーによりファッションの新しい可能性を探索するクリエイティブ集団。' },
      { property: 'twitter:image', content: 'https://ittan.design/About/ittan.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  '~/plugins/mixin',
],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
