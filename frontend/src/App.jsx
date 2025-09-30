import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Login/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
