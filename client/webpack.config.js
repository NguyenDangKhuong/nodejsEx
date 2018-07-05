const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "index.html",
    inject: "body"
});


module.exports  = {
    entry: './src/index.js',
    output: {
        filename: "bundel.js",
        path:path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [htmlPlugin]
}

module.exports