
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
	}
}

