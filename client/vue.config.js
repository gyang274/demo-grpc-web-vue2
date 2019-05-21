// vue.config.js
module.exports = {
  outputDir: './dist',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/envoy': {
        // target: 'http://127.0.0.1:9090/',
        target: 'http://127.0.0.1:9090',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/envoy': ''
        }
      }
    },
    watchOptions: {
      poll: true
    }
  }
}