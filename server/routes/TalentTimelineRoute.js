const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const TalentTimelineController = require("../controller/TalentTimelineController");

router.get("/:id", TalentTimelineController.findTime);
router.post("/", UploadDownloadHelper.uploadMultipleFile, TalentTimelineController.createTale);
router.get("/", TalentTimelineController.List);

module.exports = router;
