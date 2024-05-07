const router = require("express").Router();
const ClientController = require("../controller/ClientController");

// get
router.get("/", ClientController.list);
router.get("/:id", ClientController.findClient);

module.exports = router;
