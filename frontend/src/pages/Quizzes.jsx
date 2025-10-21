import { Card } from "@/components/ui/Card";
import { Button } from "../components/ui/button";
import { ButtonGroup } from "../components/ui/button-group";
import { BookOpen, EllipsisVertical, Funnel, Plus, SearchIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react";

export default function Quizzes() {
const params = useParams();
const userId = params.userId;
const [quizzes,setQuizzes]=useState([]);
useEffect(()=>{
  const fetchData = async()=>{
    try{
      const response = await axios.get(`http://localhost:8080/api/v1/quiz/attempted/${userId}`);
      console.log("response data for quizzes ", response.data);
      setQuizzes(response.data.quizzes);
    }catch(e){
      console.log(e);
    }
  }
  fetchData();
},[userId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <div className="mb-4 flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quizzes</h1>
          <h3 className="text-xl">Browse and Manage all your quizzes</h3>
        </div>
      </div>
      <Card className="grid gap-4 bg-slate-800 p-5 border-gray-600">
        <div className="flex justify-between">
          <ButtonGroup className={"text-white"}>
            <Button className={"bg-gray-800 border-gray-500"} variant="outline">
              All
            </Button>
            <Button className={"bg-gray-800 border-gray-500"} variant="outline">
              My
            </Button>
            <Button className={"bg-gray-800 border-gray-500"} variant="outline">
              Published
            </Button>
            <Button className={"bg-gray-800 border-gray-500"} variant="outline">
              Draft
            </Button>
          </ButtonGroup>
          <div className="flex gap-3">
            <div>
              <ButtonGroup>
                <Input
                  placeholder="Search..."
                  className="text-white border-gray-500"
                />
                <Button
                  className="bg-gray-800 border-gray-500"
                  variant="outline"
                  aria-label="Search"
                >
                  <SearchIcon className="text-gray-400" />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <ButtonGroup>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-gray-700 border-gray-700 !pl-2"
                    >
                      <Funnel className="text-gray-400" />
                      <h1 className="text-gray-400">All Categories</h1>
                      <ChevronDownIcon className="text-gray-400 border-gray-700" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="[--radius:1rem] bg-gray-700 border-gray-500"
                  >
                    <DropdownMenuGroup className="bg-gray-700 text-white">
                      <DropdownMenuItem>Physics</DropdownMenuItem>
                      <DropdownMenuItem>Mathematics</DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div className=" grid gap-4">
          {quizzes.length ? quizzes.map((quiz,ind)=>(
            <Card key={ind} className="bg-gray-900 border-gray-500 text-gray-200 min-w-full">
              <div className="flex min-h-full justify-between p-3 items-center">
                <div className="flex gap-4 items-center">
                  <div>
                    <div className="flex justify-center items-center w-8 h-8 rounded-full border border-gray-500 bg-gray-800">
                      <BookOpen size={17} />
                    </div>
                  </div>
                  <div className="grid">
                    <h1 className="text-lg">{quiz.quizId.title}</h1>
                    <h3 className="text-sm mb-1">{quiz.quizId.description}</h3>
                    <div className="flex gap-3 text-xs">
                      <h4>15 questions</h4>
                      <h4>20 min</h4>
                      <h4>32 completions</h4>
                      <h4>Created Now</h4>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-gray-800">View</Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-gray-800 border-gray-700 !px-2"
                      >
                        <EllipsisVertical/>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="[--radius:1rem] bg-gray-700 border-gray-500"
                    >
                      <DropdownMenuGroup className="bg-gray-700 text-white">
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </Card>
          )):<div className="text-white flex justify-center text-2xl
          py-2 font-semibold">
            no attempted quiz
            </div>
          }
        </div>
      </Card>
    </div>
  );
}
