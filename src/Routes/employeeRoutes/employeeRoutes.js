import express from "express";
const router = express.Router();
import { employeeController } from "../../Controllers/index.js";

router.post("/login", employeeController.login);
router.get("/statusUpdate",employeeController.statusUpdate);

export default router;