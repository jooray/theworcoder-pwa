const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // Ensures minified output
  entry: "./src/main.js", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.min.js", // Bundled and minified output
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "index.html", to: "index.html" },
        { from: "manifest.json", to: "manifest.json" },
        { from: "icons", to: "icons" },
        { from: "styles.css", to: "styles.css" },
        { from: "service-worker.js", to: "service-worker.js" },
      ],
    }),
  ],
  devtool: "source-map", // Optional: Generate source maps for debugging
};
