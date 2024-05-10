const uploadDownload = require("../middleware/uploadDownload");
const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const JobController = require("../controller/JobController");

router.get("/", JobController.list);
router.put("/:id", JobController.update);
// router.post("/", uploadDownload.uploadFiles, JobController.create);
//router.get("/images/:filename", uploadDownload.show_curr_logo);

module.exports = router;
