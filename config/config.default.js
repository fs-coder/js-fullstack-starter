"use strict";

const path = require("path");

module.exports = appInfo => {
  const config = {};

  config.keys = `${appInfo.name}_js-fullstack-starter`;

  config.static = {
    dir: [
      {
        prefix: "/public",
        dir: path.join(appInfo.baseDir, "/app/public")
      },
      {
        prefix: "/build",
        dir: path.join(appInfo.baseDir, "/build")
      }
    ]
  };

  config.webpack = {
    custom: {
      configPath: path.join(__dirname, "./webpack.config.js")
    }
  };

  config.onerror = {
    errorPageUrl: "/error.html"
  };

  config.notfound = {
    pageUrl: "/404.html"
  };

  // https://github.com/eggjs/egg-i18n
  config.i18n = {
    defaultLocale: "zh-CN",
    queryField: "locale",
    cookieField: "locale",
    cookieDomain: "",
    cookieMaxAge: "1y"
  };

  // https://github.com/node-modules/parameter
  exports.validate = {
    // convert: false,
    // validateRoot: false,
  };

  return config;
};
