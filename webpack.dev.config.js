const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    assetModuleFilename: 'assets/images/[name][ext][query]'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/images/icons"),
      "@videos": path.resolve(__dirname, "src/assets/videos"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@boot": path.resolve(__dirname, "src/common/boot.js"),
      "@functions": path.resolve(__dirname, "src/common/functions.js"),
      "@routes": path.resolve(__dirname, "src/common/routes.js"),
      "@components": path.resolve(__dirname, "src/components"),
      "@context": path.resolve(__dirname, "src/context/AppContext.jsx"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stylesComponents": path.resolve(__dirname, "src/styles/components"),
      "@stylesPages": path.resolve(__dirname, "src/styles/pages"),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]",
            outputPath: "./assets/images/",
            publicPath: "./assets/images/",
            esModule: false
          }
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000,
            name: "[name].[ext]",
            outputPath: "./assets/images/icons/",
            publicPath: "./assets/images/icons/",
            esModule: false
          }
        }
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "[name].[ext]",
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Template Webpack React",
      favicon: "",
      meta: {
        "theme-color": "#FFFFFF"
      },
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};