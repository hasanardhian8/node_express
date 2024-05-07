const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const CurriculumController = require("../controller/CurriculumController");

router.get("/", CurriculumController.findAll);
router.post("/", UploadDownloadHelper.uploadSingleFile, CurriculumController.createCurr);
router.get("/:id", CurriculumController.findOne);
router.put("/:id", UploadDownloadHelper.uploadSingleFile, CurriculumController.update);

module.exports = router;
