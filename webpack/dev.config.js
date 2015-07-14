var webpack = require('webpack');
var config = require("./prod.config.js");
config.devtool = "eval";

config.entry.push('webpack-dev-server/client?/');
config.entry.push('webpack/hot/only-dev-server');
config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),   
]
config.module.loaders[0].loader = "react-hot!babel?stage=0";
config.module.loaders[2].loader = "style-loader!css-loader?sourceMap!autoprefixer-loader"

module.exports = config;
