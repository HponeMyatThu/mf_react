const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        app1: "app1@http://localhost:8081/remoteEntry.js",
        app2: "app2@http://localhost:8082/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: '^17.0.0',
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: '^17.0.0',
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
          loader: 'babel-loader'
        }
      }
    ]
  }
};
