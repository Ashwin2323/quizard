import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Login from "./pages/Login";
import QuizPage from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";
import { Toaster } from "@/components/ui/toaster"
import Dashboard from "./pages/Dashboard";
import CreateQuiz from "./pages/CreateQuiz";
import Settings from "./pages/Settings";
import Layout from "./layout/Layout";
import AppSidebar from "./pages/AppSidebar";
import {SidebarProvider} from '@/components/ui/sidebar'
import Quizzes from "./pages/Quizzes";

export default function App() {
  const router = createBrowserRouter([
      {
          path: "/",
          element: <Layout/>,
          children: [
            {
              index: true,
              element: <HomePage/>,
            },
            {
              path: "login",
              element: <Login/>,
            },
            {
              path: "quiz",
              element: <QuizPage/>,
            },
            {
              path: 'user',
              element:<AppSidebar/>,
              children: [
                {
                  // path: '/',
                  index: true,
                  element: <Dashboard/>
                },
                {
                  path: 'create',
                  element: <CreateQuiz/>
                },
                {
                  path: 'quizzes',
                  element: <Quizzes/>
                },
                {
                  path: 'settings',
                  element: <Settings/>
                },
                ]
              },
          ],
      },
  ]);
  return (
    <div className="">
      <Toaster/>
      <RouterProvider router={router}/>
      {/* <CreateQuiz></CreateQuiz> */}
    </div>
  );
}
