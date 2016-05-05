var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:[
		"./app/index.js"
	],
	output: {
		path: __dirname + '/app/dist',
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
				// refrencing http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
				// and http://humaan.com/getting-started-with-webpack-and-react-es6-style/
				// look for dan barret comment in the commnent section
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
		new ExtractTextPlugin('dist/bundle.css', {
			allChunks: true
		})
	]
}


