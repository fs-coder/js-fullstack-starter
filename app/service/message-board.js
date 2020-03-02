module.exports = app => {
  class MessageBoard extends app.Service {
    async findAll() {
      try {
        return await this.app.mysql.select("message-board", {
          orders: [["created_at", "desc"]]
        });
      } catch (e) {
        console.log("MessageBoard.findAll Error:", e);
        return false;
      }
    }

    async create(row) {
      try {
        const res = await this.app.mysql.insert("message-board", row);
        return res.affectedRows === 1;
      } catch (e) {
        console.log("MessageBoard.create Error:", e);
        return false;
      }
    }
  }

  return MessageBoard;
};
