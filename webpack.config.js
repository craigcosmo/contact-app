var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + "/app",
	entry:[
		"./index.js"
	],
	devServer: {
		historyApiFallback: true,
		port:3311
	},
	output: {
		path: __dirname + '/app',
		filename: "bundle.js"
	},
	module: {
		loaders : [
			{
				test: /\.js$/, 
				exclude : /(node_modules|bower_components)/, 
				loader: "babel-loader", 
				query: {
					presets: ['react', 'es2015'],
					plugins: ['react-html-attrs']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css!sass')
			}

		]
	},
	resolve: {
		modulesDirectories: ["node_modules", "bower_components"]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		})
	]
}


