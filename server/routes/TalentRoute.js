const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const TalentController = require("../controller/TalentController");

router.get("/detail", TalentController.detail);
router.get("/:id", TalentController.findOne);
router.get("/", TalentController.findAll);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);
router.post("/", UploadDownloadHelper.uploadMultipleFile, TalentController.createEmp);

module.exports = router;
