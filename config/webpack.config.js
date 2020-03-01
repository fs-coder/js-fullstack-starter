module.exports = (app, defaultConfig /* , dev */) => {
  const babelLoader = defaultConfig.module.rules[0];

  babelLoader.use.options.babelrc = true;

  return defaultConfig;
};
