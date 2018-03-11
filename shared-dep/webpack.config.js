const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'shared-dep.js',
    libraryTarget: 'commonjs2',
  },
}
