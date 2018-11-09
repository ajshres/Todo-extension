const path = require('path');

module.exports = {
  stats:"errors-only",
  entry: [
    './newtab/src/scripts/index.tsx'
  ],

  output: {
    filename: 'newtab.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx', '.scss', '.json','.css'],
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
      },
      { test: /\.css$/, loader: 'css-loader'}
      
    ]
  }
};
