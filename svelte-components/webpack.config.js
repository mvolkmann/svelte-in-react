module.exports = {
  mode: 'development',
  entry: __dirname + '/src/Greet.svelte',
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
