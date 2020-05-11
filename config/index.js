const utils = require('./utils')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const buildBefore = require('./build.before')
const {entry, htmlPlugin} = buildBefore

module.exports = {
    entry,
    output: {
        filename: '[name].js',
        path: utils.rootPath('dist/js'),
        // publicPath: ''
    },
    // devtool: 'inline-source-map',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...htmlPlugin,
        new VueLoaderPlugin
    ],
    module: {
        rules: [
            // {
            //     test: /\.m?js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-env']
            //         }
            //     }
            // },
            {
                test: /\.page$/,
                loader: 'vue-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    publicPath: './img',
                    outputPath: '../img'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                loader: 'file-loader',
                options: {
                    esModule: false,
                    publicPath: './font',
                    outputPath: '../font'
                },
            },

        ]
    },
}