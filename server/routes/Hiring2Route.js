const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const Hiring2Controller = require("../controller/Hiring2Controller");

router.get("/:id", Hiring2Controller.findOne);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
