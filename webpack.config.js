const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = (configs) => ({
    mode: configs.development ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: '/'
    },
    devServer: {
        port: 3001,
        open: true,
        allowedHosts: 'all',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'jest.config.js')
            },
            {
                test: /\.tsx?$/i,
                loader: 'ts-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|obj)$/i,
                type: 'asset/resource',
                exclude: /node_modules/
            }, 
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html'), inject: true }),
            new Dotenv()
    ],
})