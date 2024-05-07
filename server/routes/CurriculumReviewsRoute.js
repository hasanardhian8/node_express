const router = require("express").Router();
const CurriculumReviewsController = require("../controller/CurriculumReviewsController");
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

router.get("/", CurriculumReviewsController.findAll);
router.get("/:id", CurriculumReviewsController.findOne);
router.put("/:id", UploadDownloadHelper.uploadSingleFile, CurriculumReviewsController.updateCure);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
