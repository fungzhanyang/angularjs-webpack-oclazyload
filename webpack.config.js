const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'none',
	entry: './app/index.js',
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'app/index.html'),
			inject: 'head'
		})
	],
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader"  // creates style nodes from JS strings
				}, {
					loader: "css-loader"    // translates CSS into CommonJS
				}, {
					loader: "less-loader"   // compiles Less to CSS
				}]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			}]
	}
}