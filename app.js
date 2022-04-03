const express = require("express");

// TODO a middlewareket is át kéne pakolni majd ..
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");

// TODO ez vmiért nem indul el const rateLimiter = require("express-rate-limit");
const hpp = require("hpp");

const globalErrorHandler = require("./middlewares/errorMiddleware");

const app = express();
const AppError = require("./utils/appError");

// MIDDLEWARES

// Security
app.use(helmet());
//TODO app.use("/api", limiter);
app.use(xss());
app.use(mongoSanitize());
app.use(
  hpp({
    whitelist: [], // properties amiket megengedünk duplikálni a paraméterben
  })
);
app.use(compression());

// Requests
app.use(express.json({ limit: "10kb" }));
app.use(express.static(`${__dirname}/public`));

// ROUTES
require("./routes/index")(app);
/*
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
*/
app.use(globalErrorHandler);
module.exports = app;
