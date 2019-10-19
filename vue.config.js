const path = require('path');

const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'element-ui': 'ELEMENT'
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'dist/assets',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack(config) {
    config.resolve.alias
      .set('~', path.resolve(__dirname, 'src'))
  },
  css: {
    loaderOptions: {
      sass: {}
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:4040',
        ws: true,
        changeOrigin: true,
      },
    }
  }
}