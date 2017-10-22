const path = require('path');
module.exports = {
    entry: ['./src.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
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