const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svg$/,
                use: ['svg-url-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
