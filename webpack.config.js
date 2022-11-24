const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (configs) => ({
    mode: configs.development ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devServer: {
        port: 3001,
        open: true,
        allowedHosts: 'all'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif|obj)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [ 
            new HtmlWebpackPlugin({ template: './src/public/index.html', inject: true })
    ],
})