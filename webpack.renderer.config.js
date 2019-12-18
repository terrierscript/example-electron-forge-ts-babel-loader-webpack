const rules = require("./webpack.rules")

// rules.push({
//   test: /\.css$/,
//   use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
// });
const babel = {
  test: /\.tsx?$/,
  exclude: /(node_modules|.webpack)/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript"
        ]
      }
    }
  ]
}

module.exports = {
  // Put your normal webpack config below here
  // entry: "./src/renderer.ts",

  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  },
  module: {
    rules
  },
  // bail: true
  infrastructureLogging: {
    level: "log"
  }
  // stats: {
  //   all: true
  // }
  // plugins: [
  //   (...args) => {
  //     console.log("plg", args)
  //   }
  // ]
}
