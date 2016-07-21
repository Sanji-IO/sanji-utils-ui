'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-utils-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjUtils';
config.externals = {
  angular: {
    root: 'angular',
    commonjs2: 'angular',
    commonjs: 'angular',
    amd: 'angular'
  },
  'sanji-logger-ui': {
    root: 'sjLogger',
    commonjs2: 'sanji-logger-ui',
    commonjs: 'sanji-logger-ui',
    amd: 'sanji-logger-ui'
  },
  'sanji-exception-ui': {
    root: 'sjException',
    commonjs2: 'sanji-exception-ui',
    commonjs: 'sanji-exception-ui',
    amd: 'sanji-exception-ui'
  },
  'sanji-socket-ui': {
    root: 'sjSocket',
    commonjs2: 'sanji-socket-ui',
    commonjs: 'sanji-socket-ui',
    amd: 'sanji-socket-ui'
  },
  'sanji-router-ui': {
    root: 'sjRouter',
    commonjs2: 'sanji-router-ui',
    commonjs: 'sanji-router-ui',
    amd: 'sanji-router-ui'
  },
  'sanji-rest-ui': {
    root: 'sjRest',
    commonjs2: 'sanji-rest-ui',
    commonjs: 'sanji-rest-ui',
    amd: 'sanji-rest-ui'
  },
  'sanji-auth-ui': {
    root: 'sjAuth',
    commonjs2: 'sanji-auth-ui',
    commonjs: 'sanji-auth-ui',
    amd: 'sanji-auth-ui'
  }
};

config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    }
  })
);
module.exports = config;
