const router = require("express").Router();
const CurriculumMateriController = require("../controller/CurriculumMateriController");
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

router.get("/", CurriculumMateriController.findAll);
router.post("/", UploadDownloadHelper.uploadSingleFile, CurriculumMateriController.create);
router.get("/:id", CurriculumMateriController.findOne);

module.exports = router;
