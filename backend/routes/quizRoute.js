import express from "express"
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { createQuiz, getQuizDetails, getQuizzes } from "../controllers/quizController.js";

const router=express.Router();

router.get("/quiz/:quizId",getQuizDetails);
router.get("/quizzes",getQuizzes);
router.get("/create",createQuiz);

export default router;