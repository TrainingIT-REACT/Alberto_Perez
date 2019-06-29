// Librerías
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    port: 3000,
    // Todas las peticiones a /api* serán redireccionadas a localhost:3001 
    proxy: {
      "/api": {
        target: "http://localhost:3001",
       pathRewrite: { "^/api": "" }
      }
    }
  }
}
