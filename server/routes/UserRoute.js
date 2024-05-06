const router = require("express").Router();
const { Router } = require("express");
const authJWT = require("../helpers/authJWT");
const IndexController = require("../controller/IndexController");

router.post("/signin", authJWT.authenticate, authJWT.login);
router.post("/signup", IndexController.UserController.signup);
//router.post("/refreshtoken",authJWT.refreshToken)

module.exports = router;
