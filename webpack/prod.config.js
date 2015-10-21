var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var output = path.join(__dirname, '../build')

module.exports = {
	context: path.resolve(__dirname, '..'),
	resolve: {
		modulesDirectories: ['node_modules', 'components', 'flux', 'fonts'],
		extensions: ['', '.js', '.jsx']
	},
	entry: [
		'./app/main.js'
	],
	output: {
		path: output,
		filename: 'bundle.js',
		publicPath: '/',
	},
	progress: true,
	module: {
		loaders: [{
			test: /\.js.*$/,
			loader: 'babel?optional[]=runtime&stage=',
			exclude: /node_modules/
		}, {
			test: /\.png.*$/,
			loaders: ['url-loader?limit=10000&mimetype=image/png'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!cssnext-loader')
		}, {
			test: /\.otf.*$/,
			loaders: ['url-loader?&limit=10&mimetype=font/opentype'],
			exclude: /node_modules/
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			inject: 'body',
			hash: true,
		}),
		new ExtractTextPlugin('bundle.css'),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"',
			}
		}),
	],
	cssnext: {
		import: {
			path: ['']
		},
		features: {
		}
	},
	'uglify-loader': {
	    mangle: false,
		compress: true,
	}
}
