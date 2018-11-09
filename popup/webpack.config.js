const path = require('path');

module.exports = {
  stats:"errors-only",
  entry: [
    './popup/src/scripts/index.tsx'
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json','.css'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(tsx|ts)?$/,
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
