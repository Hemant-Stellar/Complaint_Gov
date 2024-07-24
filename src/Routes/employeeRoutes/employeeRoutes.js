import express from "express";
const router = express.Router();
import { employeeController } from "../../Controller/index.js";

router.post("/getassigned", employeeController.getassigned);
router.post("/getComplaintById",employeeController.getComplaintById);
router.post("/addremarks",employeeController.addRemarks);

export default router;