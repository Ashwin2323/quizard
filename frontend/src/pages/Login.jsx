import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react";

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
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import { userLogin, userLogout } from "../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const params = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [signupInput, setSignupInput] = useState({
    name:"",
    email:"",
    password:"",
  });
  const [loginInput, setLoginInput] = useState({
    email:"", 
    password:"",
  });
  const isAuthenticated = useSelector(store=>store.authSlice.isAuthenticated);

  useEffect(() => {
  if (window.location.pathname === "/signup") {
      setActiveTab("signup");
    }
  }, []);
  
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      if (activeTab === "signup") signupHandler();
      if (activeTab === "login") loginHandler();
    }
  }
  
  async function signupHandler(){
    setLoading(true);
    try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/signup',
          signupInput,
          { headers: { 'Content-Type': 'application/json' } }
        );
        setLoading(false);
        toast({
            title: response.data.message || "Signup Successful",
        });
        // console.log(response.data);
        dispatch(userLogin(response.data.userId));
        navigate(`/user/${response.data.userId}`);
      } catch (err) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: err.response?.data?.message || "Server error"
        });
        // console.error(err);
      }
  }
  
  async function loginHandler(){
      setLoading(true);
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/login',
          loginInput,
          { headers: { 'Content-Type': 'application/json' }, withCredentials: true,}
        );
        setLoading(false);
        toast({
          title: response.data.message || "Login Successful",
        });
        dispatch(userLogin(response.data.userId));
        navigate(`/user/${response.data.userId}`);
      } catch (err) {
        setLoading(false);
        toast({
          variant: "destructive",
          title: err.response?.data?.message || "Server error"
        });
        // console.error(err);
      }
  }

  return (
    <div className="flex justify-center min-h-screen  bg-gray-900">
      <div className="w-full max-w-sm mt-20">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
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
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-email">Email</Label>
                  <Input
                    id="tabs-demo-email"
                    type="email"
                    placeholder="john@mail.com"
                    onChange={e => setSignupInput({...signupInput, email: e.target.value})}
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-password">Password</Label>
                  <Input
                    id="tabs-demo-password"
                    type="password"
                    placeholder="123456"
                    onChange={e => setSignupInput({...signupInput, password: e.target.value})}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={signupHandler} disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign Up"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter you credentials for login
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
                    onKeyDown={handleKeyPress}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">Password</Label>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    placeholder="123456"
                    onChange={e => setLoginInput({...loginInput, password: e.target.value})}
                    onKeyDown={handleKeyPress}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={loginHandler} disabled={loading}>
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Login"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
