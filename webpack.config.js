const path = require('path')

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }    
                    },
                ]
            },
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource'
            }
        ]
    }
}
