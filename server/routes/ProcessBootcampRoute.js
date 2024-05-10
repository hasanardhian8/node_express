const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const ProcessBootcampController = require("../controller/ProcessBootcampController");

// router.post("/", UploadDownloadHelper.uploadMultipleFile, ProcessBootcampController.createProcessBootamp);
// router.put("/:id", UploadDownloadHelper.uploadMultipleFile, ProcessBootcampController.updateProcessBootamp);
// router.put("data/:id", ProcessBootcampController.updateProcessBootampNoFile);

module.exports = router;
