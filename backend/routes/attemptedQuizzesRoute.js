import express from "express"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { getQuizDetails } from "../controllers/attemptedQuizzesController.js";

const router=express.Router();

router.get("/:userId",isAuthenticated,getQuizDetails);


export default router;