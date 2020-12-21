/* eslint-disable @typescript-eslint/no-var-requires */
const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

module.exports = (config, _) => {
  nrwlConfig(config);
  return config;
};
