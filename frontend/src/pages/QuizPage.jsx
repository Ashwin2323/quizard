import {Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { Button } from "../components/ui/button";
const QuizPage = () => {
  const difficulty = "easy";
  const isAttempted = true;
  const duration = "15";
  const questions = [
      {
        "statement": "Which keyword is used to declare a variable in JavaScript?",
        "options": ["var", "let", "const", "All of the above"],
        "status": "correct"
      },
      {
        "statement": "Which of the following is NOT a JavaScript data type?",
        "options": ["Number", "String", "Boolean", "Character"],
        "status": "incorrect"
      },
      {
        "statement": "What is the result of `typeof null` in JavaScript?",
        "options": ["object", "null", "undefined", "boolean"],
        "status": "unattempted"
      }
    ];
  const createdAt = "2025-09-15T10:30:00Z";
  const date = new Date(createdAt);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);

  return (
    <div className='flex flex-col h-[calc(100vh_-_64px)] items-center gap-2 bg-black text-white pt-10'>
        <Card className="bg-zinc-900 text-white w-5/6">
          <CardHeader>
            <div className="flex justify-between">
              <CardTitle className="text-3xl">
                JavaScript Basics Quiz
              </CardTitle>
              <div>
                {
                  (difficulty === "easy") ? (
                    <Badge className="text-green-600">
                      Easy
                    </Badge>
                  ) : (difficulty === "medium") ? (
                    <Badge className="text-yellow-400">
                      Medium
                    </Badge>
                  ) : (
                    <Badge className="text-red-500">
                      Hard
                    </Badge>
                  )
                }
                {
                  (isAttempted === true) ? (
                    <Badge className="text-yellow-300">
                      Solved
                    </Badge>
                  ) : (<></>)
                }
              </div>
            </div>
            <CardDescription className="text-xl text-slate-300">
              A quiz to test your basic knowledge of JavaScript.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1> duration : {duration} min </h1> 
            <h1> questions : {questions.length} </h1> 
            <h1> created at : {month}, {year}</h1>
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-600">
              Solve it!
            </Button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default QuizPage