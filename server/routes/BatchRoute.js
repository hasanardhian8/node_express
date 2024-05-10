const router = require("express").Router();
const UploadDownloadHelper = require("../helpers/UploadDownloadHelper");
const BatchController = require("../controller/BatchController");

router.get("/", BatchController.findBatch);
router.get("/:id", BatchController.findBatchById);
router.put("/:id", BatchController.UpdateBatch, BatchController.AddMembers);
router.put("/status/:id", BatchController.UpdateBatchStatus);
router.delete("/:id", BatchController.deleteBatch);
//router.get("/images/:filename", UploadDownloadHelper.showProductImage);

module.exports = router;
