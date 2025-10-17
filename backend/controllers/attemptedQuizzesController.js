import { Quiz, QuizAttempt } from "../models/quizModel.js";
import { User } from "../models/userModel.js";

export async function getQuizDetails(req,res){
    try{
        const quizId = req.params.quizId;
        
        const quiz = await QuizAttempt.findById(quizId);

        if(!quiz){
            return res.send("quiz not found");
        }
        
        return res.status(200).json({
            success: true,
            quiz,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Failed to load quiz",
        });
    }
}
