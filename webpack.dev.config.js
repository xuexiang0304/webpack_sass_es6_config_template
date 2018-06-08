const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'), // source folder path ->
  JS: path.resolve(__dirname, 'src/js'),
};

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: path.join(paths.JS, 'app.js'),
	output: {
    	path: paths.DIST,
    	filename: 'app.bundle.js',
  	},
  	devServer:{
  		contentBase: paths.SRC,
  	},
 	module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        exclude: /node_modules/,
	        use: {
	          loader: "babel-loader"
	        }
	      },
	      {
	        test: /\.html$/,
	        use: [
	          {
	            loader: "html-loader",
	            options: { minimize: true }
	          }
	        ]
	      },
	      {
	        test: /\.css$/,
	        use: [
	          MiniCssExtractPlugin.loader,
	          "css-loader"
	        ]
	      },
	      {
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
	        },
	        {
	            test: /\.(png|jpg|gif)$/,
	            use: "url-loader?limit=25000&mimetype=image&name=./image/[name].[ext]"
	        }, {
	            test: /bootstrap\/dist\/js\/umd\//,
	            use: 'imports?jQuery=jquery!./file.js'
	        }, {
	            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
	            use: "url-loader?limit=10000&mimetype=application/font-woff&name=./font/[hash].[ext]"
	        }, {
	            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
	            use: "url-loader?limit=10000&mimetype=application/font-woff&name=./font/[hash].[ext]"
	        }, {
	            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	            use: "url-loader?limit=10000&mimetype=application/octet-stream&name=./font/[hash].[ext]"
	        }, {
	            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	            use: "file-loader?&name=./font/[hash].[ext]"
	        }, {
	            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	            use: "url-loader?limit=10000&mimetype=image/svg+xml&name=./font/[hash].[ext]"
        }
	    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      	filename: 'index.html',
        template: path.join(paths.SRC, 'index.html'),
    }),
    new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
  ]
}