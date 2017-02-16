module.exports = {
  entry: "./react/app.js",
  output: {
    filename: "./public/resources/js/bundle.js"
  },
   module: {
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['.js', '.es6']
 }
}