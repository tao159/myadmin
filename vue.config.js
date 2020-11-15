"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
       port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: false,
    },
    hotOnly: true,
    proxy: {
      "/api4G": {
        target: "http://172.20.10.2:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api4G": "",
        },
      },
      "/apiWIFI": {
        target: "http://192.168.0.120:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/apiWIFI": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    plugins:[
    ]
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
      
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  chainWebpack(config){
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
    
    config.plugins.delete('prefetch')
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config.module
      .rule('scss')
      .use('url-loader')
        .loader('url-loader')

          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
};
