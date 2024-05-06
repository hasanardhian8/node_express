const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: process.env.POSTGRESDB_HOST,
  USER: process.env.POSTGRESDB_USER,
  PASSWORD: process.env.POSTGRESDB_ROOT_PASSWORD,
  DB: process.env.POSTGRESDB_DATABASE,
  port: process.env.POSTGRESDB_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  URL_DOMAIN: process.env.URL_DOMAIN,
  URL_IMAGE: process.env.URL_IMAGE,
  URL_API: process.env.URL_API,
  UPLOAD_DIR: process.env.UPLOAD_DIR,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
};
