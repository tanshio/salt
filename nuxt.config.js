module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SALT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@assets/css/global.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    '~/plugins/global.js',
    { src: '~/plugins/routerOption.js', ssr: false }
  ],
  /*
  ** Build configuration
  */
  build: {
    build: {
      vendor: ['gsap', 'three', 'three-effectcomposer-es6', 'pixi.js', 'lodash-es', 'vue-no-ssr']
    },
    postcss: [
      require('postcss-normalize')(),
      require('postcss-import')(),
      require('postcss-nesting')(),
      require('postcss-custom-properties')({
        preserve: true
      }),
      require('postcss-custom-media')(),
      require('postcss-color-mod-function')(),
      require('postcss-flexbugs-fixes')(),
      require('autoprefixer')(),
      require('css-mqpacker')({
        sort: true
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      config.module.rules.push({ test: /\.(glsl|frag|vert)$/, loader: 'raw-loader', exclude: /node_modules/ })
      config.module.rules.push({ test: /\.(glsl|frag|vert)$/, loader: 'glslify-loader', exclude: /node_modules/ })
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '~/modules/typescript.js'
  ]
}
