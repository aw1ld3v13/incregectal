const path = require ('path');
const webpack = require ('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: ['./client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        // test: /\.jsx?/,
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
            }
          }
        ]
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  plugins: [[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    proxy: {
      '/api/users': 'http://localhost:3000',
    }
  }
};