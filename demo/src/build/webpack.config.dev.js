var config = require('./webpack.config')
module.exports = config.dev({ devtool: 'eval' }).getConfig()