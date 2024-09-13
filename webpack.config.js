const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack  = require('webpack');

module.exports = (env,argv)=>{
  return{
    entry: {
      index:path.resolve(__dirname, 'src/index.js'),
      index2:path.resolve(__dirname, 'src/index2.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/[name].bundle.js',
      clean:true
    },
    devtool: process.env.NODE_ENV==='development'?'inline-source-map':false,
    externals:process.env.NODE_ENV==='production'?{
      'axios':'axios'
    }:{},
    devServer: {
      static: './dist',
      open:true
    },
    resolve:{
      alias:{
        '@':path.resolve(__dirname,'src')
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        useCDN:process.env.NODE_ENV==='production',
        template: './public/index.html',
        filename: 'index.html',
        title: 'Development',
        chunks:['index'],
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename:'styles/[name]/[name].css'
      }),  
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': process.env.NODE_ENV==='development'?JSON.stringify('development'):JSON.stringify('production')
      }),
    ],
    module: {
      rules: [
        { 
          test: /\.css$/, 
          use: [
            process.env.NODE_ENV==='development'?'style-loader':MiniCssExtractPlugin.loader, 
            'css-loader'
          ] 
        },
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            process.env.NODE_ENV==='development'?'style-loader':MiniCssExtractPlugin.loader, 
            'css-loader',
            'less-loader',
          ],
        },
        { 
          test: /\.ts$/, 
          use: 'ts-loader' 
        },
        {
          test:/\.(png|jpg|jpeg|gif)$/i,
          type:'asset',
          generator:{
            filename:'assets/images/[hash][ext][query]'
          }
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      minimize: process.env.NODE_ENV === 'production',
      minimizer: [
        new CssMinimizerPlugin(),
      ],
      // splitChunks: {
      //   chunks: 'all', // 对所有类型的代码块进行分割
      //   cacheGroups: {
      //     commoms:{
      //       minSize:0,
      //       minChunks:2,
      //       reuseExistingChunk:true,
      //       name(module,chunks,cacheGroupKey){
      //         const allChunksNames=chunks.map((item)=>item.name).join('~')
      //         return `./js/${allChunksNames}`
      //       }
      //     }
      //   }
      // }
    }
  }
}