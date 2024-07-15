import express from "express";
const router = express.Router();
import { userController } from "../../Controller/index.js";

router.post("/signup", userController.signup);
router.post("/complainRegister",userController.addComplaint);
router.get("/complain",userController.checkProgress);

export default router;