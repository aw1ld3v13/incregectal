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
  devServer: {
    static: {
      directory: path.join(__dirname, './dist')
    },
    // contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    proxy: {
      '/api/': 'http://localhost:3000',
    }
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
              presets: ['@babel/preset-env', '@babel/preset-react']
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
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(), 
    new HtmlWebpackPlugin({
      title: 'Development 123',
      template: 'index.html'
    }),
  ].filter(Boolean),
};