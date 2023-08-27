const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const { DefinePlugin } = require('webpack')

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
                exclude: path.resolve(__dirname, 'jest.config.js'),
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/i,
                loader: 'ts-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|obj|mtl)$/i,
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
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html'), inject: true }),
            new DefinePlugin({
                'process.env.REMOTE_API': JSON.stringify(process.env.REMOTE_API),
                'process.env.APPKEY': JSON.stringify(process.env.APPKEY)
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "public/assets", to: "assets" }
                ],
            })
    ],
})