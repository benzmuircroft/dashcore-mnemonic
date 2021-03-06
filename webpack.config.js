const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'dashcoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'dashcore-mnemonic.js'
  }
};
