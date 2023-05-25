const usersRouter = require('./users');
const postsRouter = require('./posts');
const authRouter = require("./auth");
function route(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/user", usersRouter);
  app.use("/api/posts", postsRouter);
}

module.exports = route;
