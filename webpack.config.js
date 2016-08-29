module.exports = {
  context: __dirname + '/client',
  
  entry: './index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/client/',
    filename: 'client.min.js'
  },
  module: {
    loaders: [
      { 
        test: /\.css$/, 
        loader: 'style!css' 
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};