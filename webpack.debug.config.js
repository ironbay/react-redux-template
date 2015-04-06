var webpack = require('webpack');
var config = require("./webpack.config.js");
config.devtool = "eval";

config.entry.push('webpack-dev-server/client?/');
config.entry.push('webpack/hot/only-dev-server');
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),   
]
config.module.loaders[0].loaders = ['react-hot', 'jsx?'];

module.exports = config;