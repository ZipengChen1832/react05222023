const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
 
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        //   options: {
        //     presets: [
        //       ['@babel/preset-env', { targets: "defaults" }]
        //     ]
        //   }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "public/index.html"
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    open: true,
    port: 3000,
  },
};
