var autoprefixer = require('autoprefixer');
var path = require('path');
var atImport = require('postcss-import');
var precss = require('precss');
// var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.p?css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  postcss: function(webpack) {
    return [
      atImport({
        addDependencyTo: webpack
      }),
      autoprefixer,
      precss
    ];
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ],
    extensions: ['', '.js', '.jsx']
  }
};
