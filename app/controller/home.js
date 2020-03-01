module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      await this.ctx.render("HomePage.jsx", {
        title: "Home Page"
      });
    }
  }

  return HomeController;
};
