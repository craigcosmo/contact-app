
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
	                presets: ['react', 'es2015', 'stage-0'],
	                plugins: ['react-html-attrs', 'transform-class-properties']
	            }
        	}
		]
	}
}