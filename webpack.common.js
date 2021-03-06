const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          { loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {loader: 'url-loader'},
          {loader: 'file-loader'}
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',          
        }
      }
    ]
  }
}
