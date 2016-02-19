var path = require('path')
var WebpackConfig = require('themekit-webpack-config')
var config = new WebpackConfig()
	.withStandaloneEntry('adminplus')
	.withLibrary('AdminPlus')
	.withAlias({
		'adminplus': path.resolve(__dirname, '..')
	})
	.webpack({
		sassLoader: {
			importer: require('sass-importer-npm')
		},
		sassImportLoader: {
			base: './src/sass/_variables.scss'
		}
	})
	.use('extract')

module.exports = config