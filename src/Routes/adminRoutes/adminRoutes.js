import express from "express";
const router = express.Router();
import { adminController } from "../../Controllers/index.js";

router.get("/progress",adminController.progress);
router.post("/Complains",adminController.complains);
router.post("/assign",adminController.assign);
router.post("/addAdmin",adminController.addAdmin);

export default router;