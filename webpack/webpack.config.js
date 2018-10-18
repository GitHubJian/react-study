const { resolve } = require('path');
const { pathConfig } = require('./../config');
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(pathConfig.prepack, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist/index'),
        filename: `[name].js`
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
};
