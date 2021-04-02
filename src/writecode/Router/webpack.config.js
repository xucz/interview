const path = require('path');

module.exports = {
    entry: {
        index: './src/index.jsx',
        my: './src/myRouter.jsx'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    devtool: "source-map",
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
}
