/* eslint-disable @typescript-eslint/no-var-requires */
const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

const { NX_ENV } = process.env;
const isDevelopment = NX_ENV === "development";

module.exports = (config, _) => {
  nrwlConfig(config);

  return config;
};
