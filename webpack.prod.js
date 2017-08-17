const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin= require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Night Search'
    }),
    new cleanWebpackPlugin(['public'], {
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin(),
     new webpack.optimize.AggressiveMergingPlugin()
]
}
