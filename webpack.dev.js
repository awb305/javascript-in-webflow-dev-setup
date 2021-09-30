const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    },
    port: 8080,
    hot: true
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Hot Module Replacement'
  //   }),
  //   // Plugin for hot module replacement
  //   new webpack.HotModuleReplacementPlugin()
  // ]
});
