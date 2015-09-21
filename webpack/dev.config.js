var path = require('path')
var webpack = require('webpack');
var config = require("./prod.config.js");
var HtmlWebpackPlugin = require("html-webpack-plugin");

config.devtool = "cheap-module-eval-source-map";

config.entry.push('webpack/hot/only-dev-server');
config.plugins[1] = new webpack.HotModuleReplacementPlugin()
config.module.loaders[0].loader = "react-hot!babel?stage=0"
config.module.loaders[2].loader = "style-loader!css-loader?sourceMap!cssnext-loader"

module.exports = function(host, port) {
    config.entry.push('webpack-dev-server/client?http://' + host + ':' + port);
    return config
}
