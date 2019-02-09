const path = require('path')

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bindle.js'
  }
}

module.exports = config
