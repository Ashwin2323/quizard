import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/db.js";
import  userRouter from "./routes/userRoute.js"
import  quizRouter from "./routes/quizRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app=express();
dotenv.config();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())

const PORT = process.env.PORT || 3000

app.use("/api/v1/user", userRouter);
app.use("/api/v1/quiz", quizRouter);

app.get("/",(req,res)=>{
    console.log("Hii Home page");
    res.send("Hellooooooooo");
});

app.get("/page1",(req,res)=>{
    console.log("Hii Home page 1");
    res.send("Hellooooooooo page 1");
});

app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
});