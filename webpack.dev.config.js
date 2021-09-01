/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    assetModuleFilename: "assets/images/[name][ext][query]",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
    publicPath: "/"
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
      "@schemas": path.resolve(__dirname, "src/common/schemas/index.js"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@context": path.resolve(__dirname, "src/context/AppContext.jsx"),
      "@hooks": path.resolve(__dirname, "src/hooks/index.js"),
      "@hoc": path.resolve(__dirname, "src/hoc"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@stylesComponents": path.resolve(__dirname, "src/styles/components"),
      "@stylesPages": path.resolve(__dirname, "src/styles/pages")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "[name].[ext]",
            outputPath: "./assets/images/",
            esModule: false
          }
        }
      },
      {
        test: /\.mp4$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000000,
            name: "[name].[ext]",
            outputPath: "./assets/videos/",
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
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].css"
    }),
    new ESLintPlugin({
      extensions: ["jsx", "js"],
      fix: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
