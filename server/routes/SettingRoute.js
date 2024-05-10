const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");

const SettingController = require("../controller/SettingController");

router.get("/:id", SettingController.getTalent);
router.put("/data/:id", SettingController.updateSettingsNoFile);
// router.put("/:id", UploadDownloadHelper.uploadMultipleFile, SettingController.updateSettings);
// router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
