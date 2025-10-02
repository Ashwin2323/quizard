import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Quiz, QuizAttempt } from "../models/quizModel.js";
import users from "./users.json" assert { type: "json" };
import quizzes from "./quizzes.json" assert { type: "json" };
import quizAttempts from "./quizAttempts.json" assert { type: "json" };
import questions from "./questions.json" assert { type: "json" };
import dotenv from "dotenv";
import { Question } from "../models/questionModel.js";

dotenv.config();

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();
    await Question.deleteMany();
    await Quiz.deleteMany();
    await QuizAttempt.deleteMany();

    users.forEach(user=> user._id=new mongoose.Types.ObjectId(user._id.$oid));
    questions.forEach(question=> question._id=new mongoose.Types.ObjectId(question._id.$oid));
    const insertedUsers = await User.insertMany(users);
    const insertedQuestions = await Question.insertMany(questions);

    quizzes.forEach((quiz, index) => {
      quiz._id=new mongoose.Types.ObjectId(quiz._id.$oid);
      quiz.createdBy = insertedUsers[index % insertedUsers.length]._id; 
      quiz.questions=quiz.questions.map(q=>new mongoose.Types.ObjectId(q.$oid||q));
    });
    
    await Quiz.insertMany(quizzes);
    
    quizAttempts.forEach((attempt)=>{
      attempt._id=new mongoose.Types.ObjectId(attempt._id.$oid);
      attempt.user=new mongoose.Types.ObjectId(attempt.user.$oid)
      attempt.quiz=new mongoose.Types.ObjectId(attempt.quiz.$oid)
      attempt.answers=attempt.answers.map(ans => ({
        questionId: new mongoose.Types.ObjectId(ans.questionId.$oid || ans.questionId),
        chosenOption: ans.chosenOption,
        status: ans.status
      }));
    })

    await QuizAttempt.insertMany(quizAttempts);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDB();
