const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let plugins = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        title: 'FFRPG 3 - Monster Maker',
        template: './site/index.html',
        excludeChunks: ['server']
    }),
    new MiniCssExtractPlugin({
        filename: 'style.[name].css'
    })
];

const config = {
    entry: {
        main: './site/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: '#source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ico|svg|jpg|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', 'jsx']
    }
};

module.exports = config;
