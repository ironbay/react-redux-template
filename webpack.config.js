var webpack = require('webpack');

module.exports = {
    resolve: {
        modulesDirectories: ["node_modules", "components", "stores"]
    },
    entry: [
        './components/routes.jsx'
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
            loaders: ['babel-loader'],
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
