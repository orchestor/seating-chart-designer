var autoprefixer = require('autoprefixer');
var path = require('path');
var atImport = require('postcss-import');
var colorFunction = require('postcss-color-function');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  entry: [
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: [
          'lodash',
          'transform-object-rest-spread'
        ],
        presets: [
          'es2015',
          'react',
          'react-hmre'
        ]
      }
    }, {
      test: /\.p?css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'designer.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function(webpack) {
    return [
      atImport({
        addDependencyTo: webpack
      }),
      autoprefixer,
      precss,
      colorFunction
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
