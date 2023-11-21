const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
	const mode = argv.mode ?? 'development';

	return {
		devtool: 'source-map',
		mode: mode,
		output: {
			clean: true,
		},
		performance: {
			hints: false
		},
		devServer: {
			port: 8080,
			historyApiFallback: true,
		},
		resolve: {
			modules: ['src', 'node_modules'],
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)x?$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-react',
								'@babel/preset-env',
								'@babel/preset-typescript',
							],
							plugins: ['@babel/plugin-transform-runtime']
						}
					}
				},
				{
					test: /\.s?css$/,
					exclude: /node_modules/,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: {
									localIdentName: '[path][name]__[local]--[hash:base64:8]',
								}
							},
						},
						'postcss-loader',
						'sass-loader',
					],
				}
			],
		},
		plugins:[
			new HTMLWebpackPlugin({
				template: './public/index.html'
			}),
			new webpack.DefinePlugin({
				IS_PRODUCTION: mode === 'production'
			})
		]
	}
}
