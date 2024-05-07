const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const SettingController = require("../controller/SettingController");

router.get("/:id", SettingController.getTalent);
router.put("/:id", UploadDownloadHelper.uploadMultipleFile, SettingController.updateSettings);
router.put("/data/:id", SettingController.updateSettingsNoFile);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
