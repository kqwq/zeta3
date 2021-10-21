
module.exports = (env) => {
  return {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: env.production ? 'prod.js' : 'bundle.js'
    },  // plugins: [
    //   new HtmlWebpackPlugin({
    //     title: 'Among Us KA',
    //   })
    // ],

  };
}


