const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'shared-dep.js',
    libraryTarget: 'commonjs2',
  },
}
