const path = require('path');
module.exports = {
    // entry: ['babel-polyfill', './src.js'],
    entry: ['./src.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        // filename: 'distHasPolyfill.js',
        filename: 'dist.js',
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
            }
        ]
    }
}