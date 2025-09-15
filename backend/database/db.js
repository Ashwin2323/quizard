import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected")
    }catch(err){
        console.log(err);
    }
}

export default connectDB;