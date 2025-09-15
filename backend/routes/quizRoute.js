import express from "express"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router=express.Router();

router.get("/quiz/:quizId",getQuizDetails);
router.get("/quizzes",getQuizzes);
router.get("/create",isAuthenticated,createQuiz);

export default router;