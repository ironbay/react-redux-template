var webpack = require('webpack')
var config = require('./prod.config.js')

config.devtool = 'cheap-module-eval-source-map'

config.entry.push('webpack/hot/only-dev-server')

config.module.loaders[0].loader = 'react-hot!' + config.module.loaders[0].loader
config.module.loaders[2].loader = 'style-loader!css-loader!cssnext-loader'

config.plugins[1] = new webpack.HotModuleReplacementPlugin()
config.plugins[2] = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: '"debug"'
	}
})

module.exports = function (host, port) {
	config.entry.push('webpack-dev-server/client?http://' + host + ':' + port)
	return config
}
