// ROUTES IMPORT
const userRouter = require("./userRoutes");

module.exports = function (app) {
  app.use("/api/v1/user", userRouter);
};
