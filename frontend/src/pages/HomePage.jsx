import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[calc(100vh_-_64px)] justify-center items-center gap-2 bg-black text-white">
      <h1 className="text-4xl">Learn, Quiz, Earn Rewards</h1>
      <h2>Join thousands of students and teachers on the ultimate quiz platform. Test your knowledge, compete with peers, and win exciting rewards</h2>
      <div className="flex gap-3">
        <Button onClick={() => navigate("/signup")} >Get Started</Button>
        <Button>Explore Quizzes</Button>
      </div>
    </div>
    )
  ;
}
