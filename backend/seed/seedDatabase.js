import mongoose from "mongoose";
import { User } from "../models/userModel.js";
import { Quiz } from "../models/quizModel.js";
import users from "./users.json" assert { type: "json" };
import quizzes from "./quizzes.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await User.deleteMany();
    await Quiz.deleteMany();

    const insertedUsers = await User.insertMany(users);

    quizzes.forEach((quiz, index) => {
      quiz.createdBy = insertedUsers[index % insertedUsers.length]._id; 
    });

    await Quiz.insertMany(quizzes);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDB();
