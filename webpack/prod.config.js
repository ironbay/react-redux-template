var path = require("path")
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var output = path.join(__dirname, '../build');

module.exports = {
    context: path.resolve(__dirname, '..'),
    resolve: {
        modulesDirectories: ["node_modules", "components", "flux"],
        extensions : ["", ".js", ".jsx"]
    },
    entry: [
        './app/main.js'
    ],
    output: {
        path: output,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [],
    progress: true,
    module: {
        loaders: [{
            test: /\.js.*$/,
            loader: 'babel?stage=0',
            exclude: /node_modules/
        }, {
            test: /\.png.*$/,
            loaders: ['url-loader?limit=100000&mimetype=image/png'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};
