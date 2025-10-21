import { Quiz, QuizAttempt } from "../models/quizModel.js";
import { User } from "../models/userModel.js";

export async function getQuizDetails(req,res){
    try{
        const userId = req.params.userId;
        
        const quizzes = await QuizAttempt.find({userId}).populate("quizId");

        if(!quizzes){
            return res.status(404).json({
                success: false,
                message: "No quiz attempts found for this user.",
            });
        }
        
        return res.status(200).json({
            success: true,
            quizzes,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Failed to load quizzes",
        });
    }
}
