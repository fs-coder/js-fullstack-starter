module.exports = (app) => {
  app.get('home', '/', 'home.index');
  app.get('about', '/about', 'home.about');
};
