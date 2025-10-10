import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function Login() {
  const [signupInput, setSignupInput] = useState({
    name:"",
    email:"",
    password:"",
  });
  const [loginInput, setLoginInput] = useState({
    email:"", 
    password:"",
  });
  const { toast } = useToast();
  
  async function signupHandler(){
    try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/signup',
          signupInput,
          { headers: { 'Content-Type': 'application/json' } }
        );
        toast({
            title: response.data.message || "Signup Successful",
        });
      } catch (err) {
        toast({
          variant: "destructive",
          title: err.response?.data?.message || "Server error"
        });
        // console.error(err);
      }
  }
  
  async function loginHandler(){
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/login',
          loginInput,
          { headers: { 'Content-Type': 'application/json' }, withCredentials: true,}
        );
        toast({
            title: response.data.message || "Login Successful",
        });
      } catch (err) {
        toast({
          variant: "destructive",
          title: err.response?.data?.message || "Server error"
        });
        // console.error(err);
      }
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Signup</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Create your account.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-name">Name</Label>
                <Input 
                  id="tabs-demo-name" 
                  placeholder="John" 
                  onChange={e => setSignupInput({...signupInput, name: e.target.value})}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email</Label>
                <Input
                  id="tabs-demo-email"
                  type="email"
                  placeholder="john@mail.com"
                  onChange={e => setSignupInput({...signupInput, email: e.target.value})}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-password">Password</Label>
                <Input
                  id="tabs-demo-password"
                  type="password"
                  placeholder="123456"
                  onChange={e => setSignupInput({...signupInput, password: e.target.value})}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={signupHandler}>Sign up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Email</Label>
                <Input
                  id="tabs-demo-current"
                  type="email"
                  placeholder="john@mail.com"
                  onChange={e => setLoginInput({...loginInput, email: e.target.value})}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">Password</Label>
                <Input
                  id="tabs-demo-new"
                  type="password"
                  placeholder="123456"
                  onChange={e => setLoginInput({...loginInput, password: e.target.value})}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={loginHandler}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
