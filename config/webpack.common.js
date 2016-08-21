var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './client/polyfills.ts',
    'vendor': './client/vendor.ts',
    'app': './client/ExampleApplication/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },

      // Load globally applied styles here (public).
      {
        test: /\.scss$/,
        exclude: helpers.root('client'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass')
      },

      // Load component styles here. When loaded with styleUrls in component, string of styles expected.
      {
        test: /\.scss$/,
        include: helpers.root('client'),
        loader: 'raw!sass'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),

    new CleanWebpackPlugin(['dist'], {
      root: helpers.root(),
      verbose: true,
      dry: false
    })
  ]
};
