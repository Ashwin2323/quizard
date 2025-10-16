import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useId, useState } from "react";

const maxLength = 200;
const initialValue = "";

export default function CreateQuiz() {
  const [value, setValue] = useState(initialValue);
  const [characterCount, setCharacterCount] = useState(initialValue.length);

  const id = useId();
  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setValue(e.target.value);
      setCharacterCount(e.target.value.length);
    }
  };
  return (
    <div className="flex gap-6 p-5">
        <Card className="grid gap-5 p-5 bg-gray-800 text-white placeholder:text-gray-200 border-gray-700">
          <div>
            <h1 className="text-xl  text-white  font-bold">Quiz Details</h1>
            <h3>Fill out the necessay details for quiz</h3>
          </div>
          <div>
            <Label htmlFor="name-1">Quiz Title</Label>
            <Input
              id="name-1"
              name="name"
              placeholder="Web Devlopment"
              className="placeholder:text-gray-400 border-gray-600 bg-gray-700"
            />
          </div>
          <div>
            <Label htmlFor={id}>Description</Label>
            <Textarea
              placeholder="Type your description prompt here..."
              value={value}
              maxLength={maxLength}
              onChange={handleChange}
              id={id}
              className="w-60 placeholder:text-gray-400 bg-gray-700 border-gray-600"
              rows={4}
            />
            <p className="text-muted-foreground text-xs text-gray-200">
              <span className="tabular-nums">{maxLength - characterCount}</span>{" "}
              characters left
            </p>
          </div>
          <Select>
            <SelectTrigger className="w-[180px] placeholder:text-gray-400 bg-gray-700 border-gray-600">
              <SelectValue placeholder="Difficulty Level" className='text-white placeholder:text-gray-400' />
            </SelectTrigger>
            <SelectContent className="w-60 placeholder:text-gray-400 bg-gray-700 text-white">
              <SelectGroup>
                <SelectLabel>Level</SelectLabel>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>
        <Card className="grid p-5 bg-gray-800 text-white placeholder:text-gray-200 border-gray-700">
          <div>
            <h1 className="text-xl  text-white  font-bold">Quiz Settings</h1>
            <h3>Configure how your quiz works</h3>
          </div>
          <div>
            <Label htmlFor="name-1">Passing Score(%)</Label>
            <Input
              id="name-1"
              name="name"
              placeholder="eg. 70"
              className="placeholder:text-gray-400 border-gray-600 bg-gray-700"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] placeholder:text-gray-200 bg-gray-700 border-gray-600">
              <SelectValue placeholder="Time Limit" className='text-white placeholder:text-gray-200'/>
            </SelectTrigger>
            <SelectContent className="w-60 placeholder:text-gray-200 bg-gray-700 text-white">
              <SelectGroup>
                <SelectLabel>Time</SelectLabel>
                <SelectItem value="15">15 Minutes</SelectItem>
                <SelectItem value="30">30 Minutes</SelectItem>
                <SelectItem value="45">45 Minutes</SelectItem>
                <SelectItem value="60">60 Minutes</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Card>
    </div>
  );
}
