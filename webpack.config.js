const fs = require('fs');

module.exports = {
    entry: './www/js/main.js',
    output: {
        path: __dirname + "/www/js/webpack_output",
        filename: 'webpackOutput.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    mode: 'development'
}