import { User } from "../models/userModel.js";
import { Quiz } from "../models/quizModel.js";

export async function createQuiz(req,res){
    try{
        const quiz=req.body;
        if(!quiz){
            return res.send("Invalid Details");
        }
        if(!quiz.title || !quiz.duration || !quiz.quizLevel){
            return res.send("Invalid Details");
        }
        
        
    
        // console.log("Hii from register");
        return res.json({
            message: `Quiz Created Successfully!`
        });
    }catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to Create Quiz" });
    }
}

export async function getQuizDetails(req,res){
    try{
        const userId=req.params;
        
        const user = await User.findById(userId)
        .select("-password")
        .populate("attemptedQuizzes");

        if(!user){
            return res.send("User not found");
        }
        
        return res.status(200).json({
            success: true,
            user,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Failed to load dashboard",
        });
    }
}

export async function getQuizzes(req,res){
    try{
        // console.log("these are params ",req.params);
        const userId=req.params.userId;
        
        const user = await User.findById(userId)
        .select("-password")
        .populate("attemptedQuizzes");

        if(!user){
            return res.send("User not found");
        }
        
        return res.status(200).json({
            success: true,
            user,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Failed to load dashboard",
        });
    }
}
