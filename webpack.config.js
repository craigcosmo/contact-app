var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + "/app",
	// refer https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
	entry:[
		"./index.js"
	],
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
	devServer: {
		historyApiFallback: true
		// reference http://stackoverflow.com/questions/34358334/react-router-error-cannot-get-page-name
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		})
	]
}


