const uploadDownload = require("../middleware/uploadDownload");
const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const JobController = require("../controller/JobController");

router.post("/", uploadDownload.uploadFiles, JobController.create);
router.get("/", JobController.list);
router.put("/:id", JobController.update);
router.get("/images/:filename", uploadDownload.show_curr_logo);

module.exports = router;
