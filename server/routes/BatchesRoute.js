const router = require("express").Router();
const BatchesController = require("../controller/BatchesController");

router.get("/", BatchesController.findAllRows);
router.get("/talent", BatchesController.findTalentBatch);
router.get("/batch", BatchesController.findBatch);
router.post("/", BatchesController.createBatch, BatchesController.updateCurriculumData, BatchesController.updateTalent, BatchesController.createTalentBatch);

module.exports = router;
