var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: './import.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		  	{test: /\.js/, loader: 'babel-loader'}
		]
	},
	plugins:[
	    new webpack.ProvidePlugin({
	      $:"jquery",
	      jQuery:"jquery",
	      "window.jQuery":"jquery"
	    }),
	    new webpack.ProvidePlugin({
	      Swiper:"swiper",
	    }),
	  ]
}