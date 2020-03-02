const dayjs = require("dayjs");

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      await this.ctx.render("HomePage.jsx", {
        title: "A Simple Message Board"
      });
    }

    async getAllComments() {
      const { ctx } = this;
      try {
        const comments = await ctx.service.messageBoard.findAll();
        ctx.status = 200;
        if (comments) {
          const data = comments.map(item => ({
            id: item.id,
            name: item.name || "Anonymous",
            message: item.message,
            createAt: item.created_at ? dayjs(item.created_at).format("YYYY-MM-DD hh:mm:ss") : "Unknown"
          }));
          ctx.body = {
            code: 200,
            msg: "Success",
            data
          };
        } else {
          ctx.body = {
            code: 500,
            msg: "Failed"
          };
        }
      } catch (e) {
        console.log("HomeController.getAllComments Error:", e);
        ctx.status = 200;
        ctx.body = {
          code: 500,
          msg: "An unexpected error has occurred."
        };
      }
    }

    async create() {
      const { ctx } = this;
      const { name, message } = ctx.request.body;
      try {
        const success = await ctx.service.messageBoard.create({ name, message });
        ctx.status = 200;
        if (success) {
          ctx.body = {
            code: 200,
            msg: "Success"
          };
        } else {
          ctx.body = {
            code: 500,
            msg: "Failed"
          };
        }
      } catch (e) {
        console.log("HomeController.getAllComments create:", e);
        ctx.status = 200;
        ctx.body = {
          code: 500,
          msg: "An unexpected error has occurred."
        };
      }
    }
  }

  return HomeController;
};
