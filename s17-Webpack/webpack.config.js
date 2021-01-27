const modoDev = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: modoDev ? 'development' : 'production', //beautiful!
    entry: './src/principal.js',
    output: {
        filename: "principal.js",
        path: __dirname + '/public' //__dirname is a constant of Node.js that refers the present directory
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    optimization:{
        minimizer:[
            new TerserPlugin({
                parallel:true,
                terserOptions:{
                    ecma:6
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"estilo.css"
        })
    ],
    module:{
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCssExtractPlugin.loader, //This plugin conflicts with the one below, that's why the below is commented
                //'style-loader', //This loader add to the DOM the tag <style>
                'css-loader', //This loader is the one which understands the CSS referenced in the styles files
                'sass-loader'
            ]
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}