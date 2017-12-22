const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.min.js"
	},
	devServer: {
		inline: true,
		contentBase: path.resolve(__dirname, "dist"),
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_moduels/,
				use: "babel-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_moduels/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	}
};
