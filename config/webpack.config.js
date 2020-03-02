"use strict";

const path = require("path");

module.exports = (app, defaultConfig /* , dev */) => {
  const babelLoader = defaultConfig.module.rules[0];
  babelLoader.use.options.babelrc = true;

  // TODO: Replace moment.js
  // https://github.com/ant-design/antd-dayjs-webpack-plugin
  return {
    ...defaultConfig,
    resolve: {
      extensions: [".json", ".js", ".jsx"],
      alias: {
        client: path.join(__dirname, "../client")
      }
    }
  };
};
