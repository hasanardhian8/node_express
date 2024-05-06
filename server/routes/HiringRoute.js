import { Router } from "express";
import IndexController from "../controller/IndexController";
import UploadDownloadHelper from "../helpers/UploadDownloadHelper"

const router = Router();

router.get("/", IndexController.HiringController.findAll);
router.get("/:id", IndexController.HiringController.findOne);
router.get("/images/:filename", UploadDownloadHelper.showProductImage);

export default router;
