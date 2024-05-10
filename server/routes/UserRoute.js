const router = require("express").Router();
const authJWT = require("../helpers/authJWT");
const UserController = require("../controller/UserController");

router.post("/signin", authJWT.authenticate, authJWT.login);
router.post("/signup", UserController.signup);
//router.post("/refreshtoken",authJWT.refreshToken);

module.exports = router;
