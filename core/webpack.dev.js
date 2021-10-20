const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },  
  extractComments: false


  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Among Us KA',
  //   })
  // ],
 
};
