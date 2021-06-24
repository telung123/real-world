const path = require('path')
const { addWebpackAlias, override } = require('customize-cra')

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),
)
