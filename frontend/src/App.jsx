import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";

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
            <Route path="/quiz" element={<QuizPage/>}/>
            <Route path="/question" element={<QuestionPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
