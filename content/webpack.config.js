const path = require('path');

module.exports = {
  stats:"errors-only",
  entry: [
    './content/src/scripts/index.tsx'
  ],

  output: {
    filename: 'content.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js|tsx|ts)?$/,
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
