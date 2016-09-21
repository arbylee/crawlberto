var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  context: path.join(__dirname, 'lib'),
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
    }
  },
  entry: {
    bundle: './index.js',
    climbing: './climbing/app.js',
    milano: './milano/app.js'
  },
  output: {
    path: './dist/',
    filename: 'scripts/[name].js'
  },
  module: {
    loaders: [
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' },

      { test: path.join(__dirname, 'lib'), exclude: 'node_modules', loader: 'babel-loader' },
      { test: /\.html$/, loader: 'file-loader?name=[path][name].[ext]'},
      { test: /\.(jpg|png|m4a)$/, loader: 'file-loader?name=[path][name].[ext]'},
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")}
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
