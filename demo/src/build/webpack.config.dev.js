var config = require('./webpack.config')
var options = { 
	devtool: 'eval',
	devServer: { 
		historyApiFallback: {
			index: '200.html'
		}
	}
}
module.exports = config.dev(options).getConfig()