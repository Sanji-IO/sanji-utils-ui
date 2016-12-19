const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
const nodeRoot = path.join(__dirname, 'node_modules');
const appRoot = path.join(__dirname, 'src');
const config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-utils-ui.js'
  },
  resolve: {
    alias: {
      'angular-material.css': nodeRoot + '/angular-material/angular-material.css',
      'toastr.scss': nodeRoot + '/toastr/toastr.scss'
    },
    extensions: ['.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'eslint-loader', exclude: /node_modules/, enforce: 'pre' },
      {test: /\.js$/, use: 'babel-loader?cacheDirectory', exclude: /(node_modules)/},
      { test: /\.html$/, use: 'ng-cache-loader?prefix=[dir]/[dir]', exclude: [/node_modules/, path.join(__dirname, '/src/index.html')] }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV || 'development')
      }
    })
  ]
};

module.exports = config;
