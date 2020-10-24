const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressPlugin =require("compression-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CompressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'lostbug',
            meta:{
                description:{
                    name:"description",
                    content:"a programmer's grocery store"
                }
            }
        }),
        // new webpack.optimize.SplitChunksPlugin({
        //     name: 'commons'
        // })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.(png|svg|jpg|gif|webp)$/,
            use:[
                'file-loader'
            ]
        }]
    }
};