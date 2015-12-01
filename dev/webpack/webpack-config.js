import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

function config() {
    return {
        entry: {
            app: [ './source/index.jsx' ],
        },
        output: {
            path: path.resolve('./.build/'),
            filename: '[name]-[hash].js',
        },
        module: {
            loaders: [
                // jsx
                {
                    test: /\.jsx(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loaders: [ 'babel' ],
                    exclude: /node_modules/,
                    hot: true,
                },
                // javascript
                {
                    test: /\.js(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loaders: [ 'babel' ],
                    exclude: /node_modules/,
                },
                // scss
                {
                    test: /\.scss(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loaders: [ 'style', 'css', 'sass' ],
                    exclude: /node_modules/,
                    hot: true,
                },
                // fonts & svg
                {
                    test: /\.(ttf|eot|svg|woff[2]?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loaders: [ 'file?name=fonts/[name].[ext]&limit=0' ],
                },
                // fonts & svg
                {
                    test: /\.json$/,
                    loaders: [ 'json' ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './source/index.html',
                inject: 'body',
            }),
        ],
    };
}

export default config();
export { config };