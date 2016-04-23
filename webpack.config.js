
module.exports = {
	entry:[
	"./app/index.js"
	],
	output: {
		path: __dirname + '/app',
		filename: "bundle.js"
	},
	module: {
		loaders : [
			{test: /\.js$/, exclude : /(node_modules|bower_components)/, loader: "babel-loader", 
				query: {
					presets: ['react', 'es2015'],
					plugins: ['react-html-attrs']
				}
			}
		]
	},
	resolve: {
		modulesDirectories: ["node_modules", "bower_components"]
	},
	devServer: {
		historyApiFallback: true
		// reference http://stackoverflow.com/questions/34358334/react-router-error-cannot-get-page-name
	 }
}

