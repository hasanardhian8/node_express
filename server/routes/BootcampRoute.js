const router = require("express").Router();
const BootcampController = require("../controller/BootcampController");
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

router.get("/", BootcampController.Bootcamp);
router.get("/regular", BootcampController.Regular);
router.get("/berbayar", BootcampController.Berbayar);
//router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
