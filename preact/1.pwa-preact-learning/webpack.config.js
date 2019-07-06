const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'preact'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.(sa|sc|c)ss$/,
      use: [
        // 开发环境不提取css，打包更快
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // 将 JS 字符串生成为 style 节点
        'css-loader', // 将 CSS 转化成 CommonJS 模块
        'sass-loader', // 将 Sass 编译成 CSS，默认使用 Node Sass
      ],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, "./src"),
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],
  devServer: {
    contentBase: './dist',
    port: process.env.PORT || 3000,
    hot: true
  }
}