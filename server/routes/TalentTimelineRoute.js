const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const TalentTimelineController = require("../controller/TalentTimelineController");

router.get("/:id", TalentTimelineController.findTime);
router.get("/", TalentTimelineController.List);
// router.post("/", UploadDownloadHelper.uploadMultipleFile, TalentTimelineController.createTale);

module.exports = router;
