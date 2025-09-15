import express from "express"
import {getUserDashboard, login, logout, signup} from "../controllers/userController.js"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/logout",logout);
router.get("/dashboard/:userId",isAuthenticated,getUserDashboard);

export default router;