import express from "express";
const router = express.Router();
import { usersController } from "../../Controllers/index.js";

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/complainRegister",usersController.complainRegister);
router.get("/complain",usersController.complain);

export default router;