/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    vendor: [
      "sweetalert",
      "react",
      "react-dom",
      "react-router",
      "react-router-dom"
    ]
  },
  output: {
    filename: "js/[name].[contenthash].dll.js",
    path: path.join(__dirname, "dist"),
    library: "[name]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "dist", "[name]-manifest.json")
    })
  ]
};
