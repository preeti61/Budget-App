const path=require('path')

module.exports={
   entry:'./React/src/app.js',
   output: {
    path: path.join(__dirname, 'React/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, { 
      test: /\.s?css$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'React/public'),
    historyApiFallback: true
  }
};
