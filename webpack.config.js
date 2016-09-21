var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: path.join(__dirname, 'lib'),
  entry: './index.js',
  output: {
    path: './dist/',
    filename: 'scripts/bundle.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'lib'), exclude: 'node_modules', loader: 'babel-loader' },
      { test: /\.html$/, loader: 'file-loader?name=[path][name].[ext]'},
      { test: /\.(jpg|png|m4a)$/, loader: 'file-loader?name=[path][name].[ext]'},
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      { test: path.join(__dirname, 'milano'), loader: 'file-loader?name=[path][name].[ext]'},
      { test: path.join(__dirname, 'climbing'), loader: 'file-loader?name=[path][name].[ext]'}
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
