const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");
const InstructorController = require("../controller/InstructionsController");

router.get("/", InstructorController.findAll);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.get("/:id", InstructorController.findOne);
router.put("/:id", uploadDownloadHelper.uploadSingleFile, InstructorController.updateInst);

module.exports = router;
