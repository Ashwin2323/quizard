import { Card } from "@/components/ui/Card";
import { Button } from "../components/ui/button";
import { ButtonGroup } from "../components/ui/button-group";
import { BookOpen, EllipsisVertical, Funnel, Plus, SearchIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Settings() {
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
          <h1 className="text-2xl font-bold">Settings</h1>
          <h3 className="text-xl">Update your profile</h3>
        </div>
      </div>
      <Card className='max-w-xl p-5 bg-gray-800 text-white border-gray-600'>
        <div>
      <form>
        <FieldGroup>
          <div className="flex justify-between gap-3">
            <div>
              <FieldSet>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Name
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Steve Jobs"
                      required
                      size={34}
                      className='border-gray-500'
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Email
                    </FieldLabel>
                    <Input
                      disabled
                      id="checkout-7j9-card-number-uw1"
                      placeholder="user@gmaiil.com"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Password
                    </FieldLabel>
                    <Input
                      disabled
                      type="password"
                      id="checkout-7j9-card-number-uw1"
                      placeholder="123456"
                      required
                    />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            <div>
              <FieldSet>
                <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      New Password
                    </FieldLabel>
                    <Input
                      type="password"
                      id="checkout-7j9-card-number-uw1"
                      placeholder="123456"
                      className='border-gray-500'
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                      Confirm Password
                    </FieldLabel>
                    <Input
                      type="password"
                      id="checkout-7j9-card-number-uw1"
                      placeholder="123456"
                      className='border-gray-500'
                    />
                </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </div>
            <Field orientation="horizontal" className='flex justify-end'>
              <Button type="submit">Submit</Button>
              <Button className="text-gray-900"variant="outline" type="button">
                Cancel
              </Button>
            </Field>
        </FieldGroup>
      </form>
        </div>
      </Card>
    </div>
  );
}
