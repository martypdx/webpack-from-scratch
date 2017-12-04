const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/build`
  },
  plugins: [
    new HTMLPlugin()
  ]
}