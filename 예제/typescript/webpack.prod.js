const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: '0.0.0.0',
        port: 8000,
        historyApiFallback: true,
        disableHostCheck: true,
        transportMode: 'sockjs',
    }
});