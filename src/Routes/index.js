import express from "express";
const router = express.Router();
import adminRoutes from "./adminRoutes/adminRoutes.js";
import userRoutes from "./userRoutes/userRoutes.js";
import employeeRoutes from "./employeeRoutes/employeeRoutes.js";

router.use("/admin",adminRoutes);
router.use("/user",userRoutes);
router.use("/employee",employeeRoutes);

export default router;