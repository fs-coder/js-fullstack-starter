'use strict';

const path = require('path');

module.exports = (appInfo) => {
  const config = {};

  config.keys = `${appInfo.name}_egg-react-ssr-starter`;

  config.static = {
    dir: [
      {
        prefix: '/public',
        dir: path.join(appInfo.baseDir, '/app/public'),
      },
      {
        prefix: '/build',
        dir: path.join(appInfo.baseDir, '/build'),
      },
    ],
  };

  config.onerror = {
    errorPageUrl: '/error.html',
  };

  config.notfound = {
    pageUrl: '/404.html',
  };

  // More config:
  // https://github.com/eggjs/egg-i18n
  config.i18n = {
    // 默认语言，默认 "en_US"
    defaultLocale: 'zh-CN',
    // URL 参数，默认 "locale"
    queryField: 'locale',
    // Cookie 记录的 key, 默认："locale"
    cookieField: 'locale',
    // Cookie 的 domain 配置，默认为空，代表当前域名有效
    cookieDomain: '',
    // Cookie 默认 `1y` 一年后过期， 如果设置为 Number，则单位为 ms
    cookieMaxAge: '1y',
  };

  return config;
};
