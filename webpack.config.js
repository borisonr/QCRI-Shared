var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './public/main.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
          test: /\.html$/,
          loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
            'jquery': __dirname+'/node_modules/jquery/src/jquery.js'
        }
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, '../src')
    ),
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "windows.jQuery": "jquery",
            "windows.jquery": "jquery"
        })
],
  devtool: 'inline-source-map'
};