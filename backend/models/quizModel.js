import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    quiz: { type: mongoose.Types.ObjectId, ref: "Quiz", required: true },
    answers: [{
        questionId: { type: mongoose.Types.ObjectId, ref: "Question" },
        chosenOption: { type: String, enum: ["A", "B", "C", "D", ""] },
        status: { type: String, enum: ["correct", "incorrect", "unattempted"] }
    }],
    score: { type: Number, default: 0 },
    attemptedAt: { type: Date, default: Date.now }
}, {timestamps: true});

export const QuizAttempt = mongoose.model("QuizAttempt",quizAttemptSchema);



const quizSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
    },
    isAttempted:{
        type: Boolean,
        default: false
    },
    quizLevel:{
        type: String,
        enum:["Easy", "Medium", "Hard"]
    },
    questions:[{type: mongoose.Types.ObjectId, ref: "Question"}],
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    duration: {
        type: String,
        enum: ["15", "30", "45", "60"]
    }
}, {timestamps: true}) 

export const Quiz = mongoose.model("Quiz",quizSchema);