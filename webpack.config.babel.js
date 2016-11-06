import ExtractTextPlugin from 'extract-text-webpack-plugin'
import OpenBrowserPlugin from 'open-browser-webpack-plugin'
import dir from 'webpack-directory-scan'

let modulesDirectories = dir.get('./')
let port = 3311
let sourceMap = 'source-map'

export default {
	devtool: sourceMap,
	context: __dirname + '/app',
	entry:[
		'./index.js'
	],
	devServer: {
		historyApiFallback: true,
		port: port,
		contentBase: 'app',
		noInfo: true,
	},
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
		loaders : [
			{
				test: /\.js$/, 
				exclude : /(node_modules|bower_components)/, 
				loader: 'babel-loader', 
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
		modulesDirectories: modulesDirectories
	},
	plugins: [
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		}),
		new OpenBrowserPlugin({ 
			url: 'http://localhost:'+port, 
			browser: 'google chrome'
		})
	]
}


