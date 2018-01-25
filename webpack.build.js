const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-utils-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjUtils';
config.externals = [
  'angular',
  'sanji-logger-ui',
  'sanji-exception-ui',
  'sanji-socket-ui',
  'sanji-router-ui',
  'sanji-rest-ui',
  'sanji-auth-ui'
];

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false,
      dead_code: true
    }
  })
);
module.exports = config;
