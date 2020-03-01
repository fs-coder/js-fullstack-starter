"use strict";

const path = require("path");

module.exports = appInfo => {
  const config = {};

  config.keys = `${appInfo.name}_egg-react-ssr-starter`;

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

  return config;
};
