module.exports = {
	
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
    devServer: {
    port: 3000,
    historyApiFallback: {
      index: './dist/index.html'
    }
  }
};