import express from "express";
const router = express.Router();
import { adminController ,userController} from "../../Controller/index.js";

router.post("/filterbystatus",adminController.filterByStatus);
router.get("/getallemployees",adminController.getAllEmployees);
router.post("/assign",adminController.addAssignment);
router.post("/addEmployee",adminController.addEmployee);

export default router;