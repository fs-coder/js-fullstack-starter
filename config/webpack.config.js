"use strict";

const path = require("path");

module.exports = (app, defaultConfig /* , dev */) => {
  const babelLoader = defaultConfig.module.rules[0];

  babelLoader.use.options.babelrc = true;

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
