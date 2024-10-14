const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App1": "./src/App1",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.0"
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^17.0.0"
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
