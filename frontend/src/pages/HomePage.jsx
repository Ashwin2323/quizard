import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";

// src/pages/HomePage.jsx
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-2 bg-black text-white">
      <h1 className="text-4xl">Learn, Quiz, Earn Rewards</h1>
      <h2>Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards</h2>
      <div className="flex gap-3">
        <Button>Get Started</Button>
        <Button>Explore Quizzes</Button>
      </div>
    </div>
    )
  ;
}
