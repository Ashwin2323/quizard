import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast"
import {useSelector} from "react-redux"
import { userLogin, userLogout } from "../store/authSlice";
import axios from "axios";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {toast} = useToast();
  const isAuthenticated = useSelector(store=>store.authSlice.isAuthenticated);
  async function logoutHandler(){
    try{
      const response = await axios.get(
        'http://localhost:8080/api/v1/user/logout',
        { headers: { 'Content-Type': 'application/json' }, withCredentials: true,}
      );
      toast({
        title: response.data.message || "Logout Successful",
      });
      dispatch(userLogout());
      navigate("/login")
    }catch(err){
      toast({
        variant: "destructive",
        title: err.response?.data?.message || "Server error"
      });
    }
  }

  return (
    <div className="flex items-center justify-between h-[64px] bg-black text-white w-full px-[16px] py-[8px]">
      <Link to='/'>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
          {" "}
          Quizard{" "}
        </h1>
      </Link>
      <div className="flex gap-10">
        <h1 className="text-2xl"> Quiz </h1>
        <h1 className="text-2xl"> History </h1>
        <h1 className="text-2xl"> About </h1>
      </div>
      <div className="flex gap-3">
        {!isAuthenticated?(
         <> <Button className="h-full bg-slate-200 text-gray-600" 
            onClick={()=>{navigate("/login")}} >Sign In</Button>
            <Button className="h-full bg-violet-800"
            onClick={()=>{navigate("/login")}} >Register</Button></>
          ) :(
          <><Button className="h-full bg-green-800"
            onClick={()=>{navigate("/user")}} >Dashboard</Button>
            <Button className="h-full bg-red-700"
            onClick={logoutHandler} >Log Out</Button></>
          )}
      </div>
    </div>
  );
};

export default Navbar;
