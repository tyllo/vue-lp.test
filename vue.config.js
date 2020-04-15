
const isProd = process.env.NODE_ENV === 'production';


module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: !isProd,
  css: {
    sourceMap: !isProd,
    extract: false,
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/_variables.scss";',
      },
    },
  },
  pluginOptions: {
    moment: {
      locales: [
        'ru',
        // 'en',
      ],
    },
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
