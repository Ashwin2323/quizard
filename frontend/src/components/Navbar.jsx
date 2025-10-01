import { Button } from "@/components/ui/button"
import { useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between h-[64px] bg-black text-white w-full px-[16px] py-[8px]">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent">
        {" "}
        Quizard{" "}
      </h1>
      <div className="flex gap-10">
        <h1 className="text-2xl"> Quiz </h1>
        <h1 className="text-2xl"> History </h1>
        <h1 className="text-2xl"> About </h1>
      </div>
      <div className="flex gap-3">
        <Button className="h-full bg-slate-200 text-black" 
        onClick={()=>{navigate("/login")}} >Sign In</Button>
        <Button className="h-full bg-violet-800"
        onClick={()=>{navigate("/signup")}} >Register</Button>
      </div>
    </div>
  );
};

export default Navbar;
