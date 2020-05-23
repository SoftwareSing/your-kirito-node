const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'tampermonkey.js'),
  output: {
    filename: '_____output_____.js',
    path: path.resolve(__dirname, './')
  },
  optimization: {
    minimize: false
  }
}
