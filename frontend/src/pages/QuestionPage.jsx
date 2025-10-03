import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

function QuestionPage() {
  const [timeleft, setTimeleft] = useState(10);
  const options = ["Language", "Library", "Framework", "Tool"];
  const [answer, setAnswer] = useState("");
  useEffect(() => {
    if (timeleft <= 0) return;
    const timer = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeleft]);

  return (
    <div className="flex flex-col h-[calc(100vh_-_64px)] items-center gap-2 bg-black text-white pt-10">
      <Card className="bg-zinc-900 w-5/6">
        <CardHeader className="text-white">
          <div className="flex justify-between items-center">
            <CardTitle className="text-4xl">What is JS?</CardTitle>
            <div className="text-xl font-semibold">Time Left: {timeleft}s</div>
          </div>
        </CardHeader>
        <CardContent className="">
          <div className="flex-row">
            {options.map((ele, idx) => (
            <div className="pt-4"> 
              <Button
                key={idx}
                variant={answer === ele ? "default" : "outline"}
                className={`min-w-80 transition-all text-xl bg-black text-white ${
                  answer === ele
                    ? "bg-purple-950 shadow-[0_0_8px_rgba(0,191,255,0.8)]"
                    : "hover:bg-amber-900 hover:text-white"
                }`}
                onClick={() => setAnswer(ele)}
              >
                {ele}
              </Button>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
            <div className="w-full flex justify-between">
                <Button variant={"outline"} className="bg-black text-white">
                    Previous 👈
                </Button>
                <Button variant={"outline"} className="bg-black text-white">
                    Next Question 👉
                </Button>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default QuestionPage;
