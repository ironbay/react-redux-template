var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "js", "css"]
    },
    entry: [
        './js/main.jsx'
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [],
    module: {
        loaders: [{
            test: /\.js.*$/,
            loaders: ['react-hot', 'jsx?'],
            exclude: /node_modules/
        }, {
            test: /\.png.*$/,
            loaders: ['url-loader?limit=100000&mimetype=image/png'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?sourceMap!autoprefixer-loader"
        }]
    }
};