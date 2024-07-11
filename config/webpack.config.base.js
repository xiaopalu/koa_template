const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const nodeExclude = require('webpack-node-externals');
const utils = require('./utils');
const webpackconfig = {
  target: 'node', //运行环境
  entry: {
    server: path.join(utils.APP_PATH, 'index.js'),
  },
  output: {
    path: utils.DIST_PATH, //输出的路径，需要绝对路径，
    filename: `[name].bundle.js`, //输出的名字
  },
  // 使用webpack5之后，webpack会从配置文件的mode中自动为process.env.NODE_ENV赋值，而取的值，就是该配置文件的mode属性。如果没有值，则会默认返回“production”。
  // 让webpack不会自动读取配置文件中的mode给process.env.NODE_ENV赋值。
  // 这样process.env.NODE_ENV就只是被我们自定义的文件赋值，就不会冲突了。
  optimization: {
    nodeEnv: false,
  },
  module: {
    rules: [
      // 使用babel-loader，支持ES6语法，排除node_modules文件
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: [path.join(__dirname, './node_modules')], //排除node_modules
      },
    ],
  },
  externals: [nodeExclude()], //排除node_modules
  plugins: [
    new CleanWebpackPlugin(), //排除清除webpack打包文件
    //new webpack.EnvironmentPlugin(['NODE_ENV']), // 可以直接使用 environmentPlugin
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'prod'
            ? "'production'"
            : "'development'",
      },
    }),
  ],
};

module.exports = webpackconfig;
