var path = require('path');

module.exports = {
  resolve: {
    root: [
      path.resolve('src')
    ],
    extensions: ['', '.js']
  },

  devtool: 'source-map',

  entry: 'main',

  context: path.resolve('src'),

  output: {
    path: path.resolve('dist'),
    chunkFilename: '[name].js?[hash]',
    filename: '[name].js?[hash]'
  },

  module: {
    loaders: [
      { test: /\.(js|jsx)$/i, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
