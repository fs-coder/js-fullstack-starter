module.exports = app => {
  app.get("home", "/", "home.index");

  app.get("/api/message-board", "home.getAllComments");
  app.post("/api/message-board", "home.create");
};
