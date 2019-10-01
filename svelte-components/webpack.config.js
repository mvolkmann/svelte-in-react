module.exports = {
  mode: 'development',
  // This works.
  //entry: __dirname + '/src/Greet.svelte',
  // This does not work.
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'web-components.js'
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            customElement: true
          }
        }
      }
    ]
  }
};
