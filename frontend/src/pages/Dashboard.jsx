import { Card } from "@/components/ui/Card";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CreateQuiz from "./CreateQuiz";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const params = useParams();
  const userId=params.userId;
  const [quizzes,setQuizzes] = useState(0);
  const [averageScore,setAverageScore] = useState(0);
  const [name,setName] = useState("User");
  const [loading,setLoading]=useState(true);
  useEffect( ()=>{
    try{
      async function fetchData(){
        const response =  await axios.get(`http://localhost:8080/api/v1/user/${userId}`, 
          {withCredentials:true}
        );
        setQuizzes(response.data.user.attemptedQuizzes.length);
        let scoreSum=0;
        response.data.user.attemptedQuizzes.forEach(q => {
          scoreSum += q.score;
        });
        setName(response.data.user.name);
        const total = response.data.user.attemptedQuizzes.length;
        setAverageScore(total > 0 ? (scoreSum / total).toFixed(2) : 0);
        setLoading(false);
      }
      fetchData();
    }catch(e){
      console.log(e);
    }
  },[]);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="mb-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <h3 className="text-xl">Welcome back, {name}!</h3>
        </div>
        <div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="bg-green-700 text-base">
                  <Plus size={23} />
                  Create New Quiz
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl sm:max-w-2xl bg-gray-900 text-white border-none">
                <DialogHeader>
                  <DialogTitle>Create New Quiz</DialogTitle>
                  <DialogDescription className='text-gray-400'>
                    Add title, description and configure quiz settings.
                  </DialogDescription>
                </DialogHeader>
                <CreateQuiz />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className='text-black'>Cancel</Button>
                  </DialogClose>
                  <Button type="submit" className='bg-green-600'>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <Card className="bg-gray-800 text-white border-none p-5 w-full">
          <h1 className="text-xl">Total Quizzes</h1>
          {loading ?<div className="text-white">
              Loading...
          </div>:
          <h1 className="text-5xl font-semibold">{quizzes}</h1>}
        </Card>
        <Card className="bg-gray-800 text-white border-none p-5 w-full">
          <h1 className="text-xl">Average Score</h1>
          {loading ?<div className="text-white">
              Loading...
          </div>:
          <h1 className="text-5xl font-semibold">{averageScore}</h1>}
        </Card>
        <Card className="bg-gray-800 text-white border-none p-5 w-full">
          <h1 className="text-xl">Accuracy</h1>
          {loading ?<div className="text-white">
              Loading...
          </div>:
          <h1 className="text-5xl font-semibold">80%</h1>}
        </Card>
      </div>
    </div>
  );
}
