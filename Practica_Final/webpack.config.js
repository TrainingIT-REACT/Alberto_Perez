// Librerías
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom','react-redux','redux','redux-thunk'],
    sw: './src/sw.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js',
    //para fijar el server en dev
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
      },
      {
        test: /\.(ico|json)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      { from: 'public', to: '' },
    ]),
    new WorkboxPlugin.InjectManifest({ 
      swSrc: './src/sw.js', 
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
  },
  optimization: {
    // Importamos todos los módulos desde un único runtime
    runtimeChunk: 'single',
    // Configuramos splitChunks
    splitChunks: {
      // Configuramos los grupos de chunks
      cacheGroups: {
        // Definimos un grupo vendor que contendrá las
        // librerías
        vendor: {
          // Apuntamos al entrypoint "vendor"
          test: 'vendor',
          // Le damos un nombre al chunk
          name: 'vendor',
          // Fuerza a Webpack a crear un chunk
          // de este grupo siempre
          enforce: true,
          // Selecciona todos los tipos de chunks,
          // síncronos y asíncronos
          chunks: 'all'
        }
      }
    }
  }
}
