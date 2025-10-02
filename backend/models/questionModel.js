import mongoose from "mongoose";

const questionSchema=new mongoose.Schema({
    statement:{
        type:String,
        required: true
    },
    options:[String],
    answer: {
        type: String,
        enum: ["A", "B", "C", "D"],
        required: true
    }
},{timestamps:true});

export const Question = mongoose.model("Question",questionSchema); 