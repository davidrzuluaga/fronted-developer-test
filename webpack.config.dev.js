const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entry = {
    app: path.resolve(__dirname, 'src/index.js'),
};

const output = {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
};

const devServer = {
    hot: true,
    port: 8000,
    lazy: false,
    disableHostCheck: true,
    historyApiFallback: true,
};

const modules = {
    rules: [{
        test: /\.html$/,
        use: ['html-loader'],
    }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
        resolve: { extensions: ['.js', '.jsx'] },
    }, {
        test: /\.(scss|css)$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ],
    }, {
        test: /\.(jpg|png|gift|woff|woff2|eot|ttf|svg|mp4|webm)$/,
        use: {
            loader: 'url-loader',
            options: { limit: 900000, name: 'assets/[hash].[ext]' },
        },
    }]
};

const plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Santiago Marulanda - Test frontend developer',
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: './public/redux_icon.ico',
    }),
    new Dotenv()
];

module.exports = {
    entry,
    output,
    plugins,
    devServer,
    module: modules,
};
