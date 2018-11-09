const path = require('path');

module.exports = {
  stats:"errors-only",
  entry: [
    './event/src/index.ts'
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(js|ts|)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', '@babel/preset-typescript', 'react']
        }
      }
    ]
  }
};