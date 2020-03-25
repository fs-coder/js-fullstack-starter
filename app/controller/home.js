module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      await this.ctx.render("home/index.jsx");
    }
  }
  return HomeController;
};
