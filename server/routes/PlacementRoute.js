const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const PlacementController = require("../controller/PlacementController");

router.get("/", PlacementController.List);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.delete("/:id", PlacementController.hapusPlace);

module.exports = router;
