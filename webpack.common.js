const webpack = require('webpack')

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/news.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '.')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};


