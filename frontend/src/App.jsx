import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="flex flex-col">
      <BrowserRouter>
      <Navbar/>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/signup" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
