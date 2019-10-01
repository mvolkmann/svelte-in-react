module.exports = {
  entry: './Greet.svelte',
  output: {
    path: __dirname,
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
