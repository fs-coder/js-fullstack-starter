module.exports = (app) => {
  class DemoService extends app.Service {
    async list() {
      return Promise.resolve(['Egg.js', 'React', 'beidou']);
    }
  }
  return DemoService;
};
