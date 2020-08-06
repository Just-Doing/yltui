const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'sharewinfo-utils': './packages/sharewinfo-utils/src/index.js',
    'sharewinfo-ui': './packages/sharewinfo-ui/src/index.js',
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, './packages/'),
    filename: '[name]/dist/index.js',
    library: 'sharewinfo',
    libraryTarget: 'umd',
  },
};
