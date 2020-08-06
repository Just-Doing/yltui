const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'sharewinfo-utils': './packages/sharewinfo-utils/src/index.js',
    'sharewinfo-ui': './packages/sharewinfo-ui/src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './packages/'),
    filename: '[name]/dist/index.js',
    library: 'sharewinfo',
    libraryTarget: 'umd',
  },
};
