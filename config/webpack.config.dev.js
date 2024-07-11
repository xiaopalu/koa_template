const webpackMerge = require('webpack-merge')
const baseWbpackConfig = require('./webpack.config.base')
const webpackConfig = webpackMerge.merge(baseWbpackConfig, {
  devtool: 'eval-source-map', //开启source-map
  mode: 'development', //开发模式
  stats:{children:false}
});

module.exports = webpackConfig;