// 1. pastikan selalu import dotenv di line pertama
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const compress = require("compression");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const middleware = require("./helpers/middleware");

//for access models to db
const db = require("./models");
const routes = require("./routes/index");

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// use helmet spy bisa dikenali SEO
app.use(helmet());
// secure apps by setting various HTTP headers
app.use(compress());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// load models dan simpan di req.context
app.use(async (req, res, next) => {
  req.context = { models };
  next();
});
app.use(process.env.URL_API, routes);

//auth.setMiddleware(app);

//use middleware to handle error from others modules
app.use(middleware.handleError);
app.use(middleware.notFound);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.listen(process.env.PORT || 3000, () => {
  console.log("running");
});
module.exports = app;
