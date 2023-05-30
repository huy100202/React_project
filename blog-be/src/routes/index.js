const usersRouter = require('./users');
const postsRouter = require('./posts');
const authRouter = require("./auth");
const categoriesRouter = require("./categories");
function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/user", usersRouter);
  app.use("/api/post", postsRouter);
  app.use("/api/category", categoriesRouter);
}

module.exports = route;
