const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      test: /\.js(\?.*)?$/i,
      cache: true,
      sourceMap: true,
      extractComments: true
    }),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      filename: "[path].gz[query]",
      threshold: 10240
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
});