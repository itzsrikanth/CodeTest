const webpack = require('webpack');
const path = require('path');

module.exports = function (env) {
    return {
        entry: {
            index: './src/js/index.js'
        },
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, 'assets/js'),
            filename: '[name].[hash].js',
            sourceMapFilename: '[file].[hash].js.map',
            publicPath: '/assets/js/'
        },
        stats: {
            colors: true,
            reasons: true,
            chunks: true
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(),
            new webpack.ExtendedAPIPlugin()
        ]
    }
}