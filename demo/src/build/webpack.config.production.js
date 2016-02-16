var config = require('./webpack.config')
module.exports = config.production().getConfig()