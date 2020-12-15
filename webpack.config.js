const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: "./dist",
		hot: true,
		compress: true,
		open: true
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
						cacheDirectory: true
					}
				}
			}
		]
	}
};
