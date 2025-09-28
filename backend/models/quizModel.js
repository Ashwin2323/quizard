import mongoose from "mongoose";

const quizHistory = new mongoose.Schema({
    score:{
        type: String,
    },
    date:{
        type: Date
    }
})

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
        enum:["easy", "medium", "hard"]
    },
    questions:[{
        statement:{
            type:String,
            required: true
        },
        options:[String],
        status:{
            type: String,
            enum: ["correct", "incorrect", "unattempted"]
        }
    }],
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

export const Quiz = mongoose.model("Quiz",quizSchema)