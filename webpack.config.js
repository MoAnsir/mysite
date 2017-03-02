var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/js');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js',
		publicPath: './dist'
	},
	devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
	module: {
		loaders:[
			{
				test: /\.js?/, exclude: /(node_modules)/, include: APP_DIR, loader: 'babel-loader'
			},
			{ 
				test: /\.css$/, loader: 'style-loader!css-loader' 
			},
			// the url-loader uses DataUrls. 
			// the file-loader emits files. 
			{
				test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				// Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin 
				// loader: "url?limit=10000" 
				loader: "url-loader"
			},
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				loader: 'file-loader'
			}
			// {
			// 	test: /\.(woff|woff2|eot|tff|svg)$/, loader: 'url-loader?limit=100000'
			// }
		]
	}
};

module.exports = config;
