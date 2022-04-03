const mongoose = require("mongoose");
const app = require("./app");
// const limiter = rateLimiter({
//   max: 100,
//   windowsMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again later",
// });

mongoose
  .connect(process.env.MONGODB_CONNSTRING, {
    useNewUrlParser: true,
    authSource: "admin",
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });
const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`App running on port ${process.env.SERVER_PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
