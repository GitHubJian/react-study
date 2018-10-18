const { resolve } = require('path');
const { pathConfig } = require('./../config');
const path = require('path');
const webpack = require('webpack');

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
                        babelrc: 'false',
                        presets: ['react'],
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-es2015-modules-commonjs'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
            fetch: 'isomorphic-fetch',
            promise: 'promise'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':
                JSON.stringify(process.env.NODE_ENV) ||
                JSON.stringify('development')
        })
    ],
    target: 'node',
    mode: 'development'
};
