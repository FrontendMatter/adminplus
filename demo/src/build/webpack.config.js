var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withEntry('demo')
	.withAlias({
		'adminplus': path.resolve(__dirname, '../../..'),
		'adminplus-demo': path.resolve(__dirname, '../..')
	})
	.webpack({
		sassLoader: {
			importer: require('sass-importer-npm')
		},
		markdownLoader: {
			highlight: function (code) {
				return require('highlight.js').highlightAuto(code).value
			}
		}
	})
	.use('extract')
	.use('vendor')

module.exports = config