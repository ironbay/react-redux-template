var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var port = 8080
var config = require('./dev.config.js')('0.0.0.0', port);

new WebpackDevServer(webpack(config), {
	contentBase: './build',
	historyApiFallback : true,
	hot: true
}).listen(port, '0.0.0.0', function (err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at localhost:' + port);
});
