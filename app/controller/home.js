module.exports = (app) => {
  class HomeController extends app.Controller {
    async index() {
      await this.ctx.render('home-page.jsx', {
        title: 'Home Page',
      });
    }

    async about() {
      await this.ctx.render('about-page.jsx', {
        title: 'About Page',
        hello: 'Hello From Controller',
      });
    }
  }

  return HomeController;
};
