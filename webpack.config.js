module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
}
