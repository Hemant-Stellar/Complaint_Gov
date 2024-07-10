import express from "express";
const router = express.Router();
import { adminController } from "../../Controllers/index.js";

router.post("/login", adminController.login);
router.get("/progress",adminController.progress);
router.post("/assign",adminController.assign);

export default router;