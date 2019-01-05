const webpack = require('webpack');
const path = require('path');

// webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = function (env) {
    return {
        mode: env === 'production'? 'production' : 'development',
        entry: {
            index: './src/js/index.js'
        },
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, 'build', 'assets/js'),
            filename: '[name].[hash].js',
            sourceMapFilename: '[file].map',
            publicPath: '/assets/js/'
        },
        stats: {
            colors: true,
            reasons: true,
            chunks: true
        },
        optimization: {
            minimizer: env === 'production'? [
                new UglifyjsWebpackPlugin({
                    test: /\.js$/
                })
            ] : []
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            new webpack.ExtendedAPIPlugin(),
            new CleanWebpackPlugin(['build'])
        ]
    }
}