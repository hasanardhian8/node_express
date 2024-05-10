const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");
const Instructorcontroller = require("../controller/InstructorController");

router.get("/", Instructorcontroller.findAll);
//router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.get("/:id", Instructorcontroller.findOne);
//router.put("/:id", uploadDownloadHelper.uploadSingleFile, InstructorController.updateInst);

module.exports = router;
