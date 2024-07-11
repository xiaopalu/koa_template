const webpackMerge = require('webpack-merge');
const baseWbpackConfig = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');
const webpackConfig = webpackMerge.merge(baseWbpackConfig, {
  mode: 'production', //生产模式
  stats: { children: false },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true,
      }),
    ],
    // 用来避免他们之间的重复依赖
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
});

module.exports = webpackConfig;
