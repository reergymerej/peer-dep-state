const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'host.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    'shared-dep': 'shared-dep',
  }
}
