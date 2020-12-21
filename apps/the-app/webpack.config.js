/* eslint-disable @typescript-eslint/no-var-requires */
const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const webpack = require("webpack");

const { NX_ENV } = process.env;
const isDevelopment = NX_ENV === "development";

module.exports = (config, _) => {
  nrwlConfig(config);

  return {
    ...config,
    plugins: [
      ...config.plugins,
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    devServer: {
      ...config.devServer,
      hot: true,
    },
  };
};
