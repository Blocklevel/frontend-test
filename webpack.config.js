var webpack = require('webpack');

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
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
      }
    ]
  }
}
