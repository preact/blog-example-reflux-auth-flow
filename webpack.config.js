var webpack= require('webpack');

var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var autoprefixer= require('autoprefixer-core');

module.exports = {
  entry: [
    './app/main.jsx',
    'webpack/hot/dev-server'
  ],
  output: {
    path: __dirname + '/build',
    publicPath: "http://localhost:8081/build",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      loader: 'react-hot!babel!eslint', exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style!css?module&localIdentName=[path][name]___[local]---[hash:base64:5]!sass!postcss-loader'
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
    },
    {
      test: /\.(svg)$/,
      loader: 'raw-loader'
    }
    ]
  },
  postcss: [
    autoprefixer
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'app']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('main', null, false)
  ]
};