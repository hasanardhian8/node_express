const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const HiringController = require("../controller/HiringController");

router.get("/", HiringController.findAll);
router.get("/:id", HiringController.findOne);
//router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
