/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
    chunkFilename: "js/[id].[chunkhash].js",
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
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
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
            name: "[name].[contenthash].[ext]",
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
            name: "[name].[contenthash].[ext]",
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
            name: "[name].[contenthash].[ext]",
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
            name: "[name].[contenthash].[ext]",
            outputPath: "./assets/fonts/",
            esModule: false
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname),
      manifest: require("./dist/vendor-manifest.json")
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
      chunkFilename: "styles/[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "Template Webpack React",
      favicon: "",
      meta: {
        "theme-color": "#FFFFFF"
      },
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, "./**/*.dll.js"),
      outputPath: "js",
      publicPath: "/js/"
    })
  ]
};
