const Router = require("express").Router;

class MyRouter {
  path;
  router;

  constructor(path) {
    this.path = path;
    this.router = Router();
  }

  init(app) {
    app.use(this.path, this.router);
  }
  setCallbacks(funcs) {
    Object.keys(funcs).forEach((Key) => {
      this.router.get("/" + Key, funcs[Key]);
    });
  }
}

module.exports = MyRouter;
