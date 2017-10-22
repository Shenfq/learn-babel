const path = require('path');
module.exports = {
    entry: ['./runtime/src.js'],
    // entry: ['./polyfill/src.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'runtime.js',
        // filename: 'polyfill.js',
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