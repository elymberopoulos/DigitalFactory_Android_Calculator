module.exports = {
    entry: './www/js/index.js',
    output: {
        path: __dirname + "/www/js/webpack_output",
        filename: 'webpackOutput.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // {
            //     test: /\.m?js$/,
            //     loader: 'babel-loader', 
            //     exclude: /node_modules/,
            //     options:{
            //         presets:['@babel/preset-env']
            //     }
            // }
        ]
    },
    mode: 'development'
}