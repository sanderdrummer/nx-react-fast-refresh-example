/* eslint-disable @typescript-eslint/no-var-requires */
const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

const { NX_ENV } = process.env;
const isDevelopment = NX_ENV === "development";

module.exports = (config, _) => {
  nrwlConfig(config);

  if (isDevelopment) {
    //fast refresh
    config.module.rules[0] = {
      test: /\.([jt])sx?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        babelrc: true,
        cacheDirectory: true,
        cacheCompression: false,
        plugins: ["react-refresh/babel"],
      },
    };
  }

  return {
    ...config,
    plugins: [
      ...config.plugins,
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
      ...config.devServer,
      hot: true,
    },
  };
};
