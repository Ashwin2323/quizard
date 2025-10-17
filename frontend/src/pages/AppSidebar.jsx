import { Brain, ChartNoAxesColumn, LayoutDashboard, List, Settings, SquareLibrary, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function AppSidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const params = useParams();
 const userId = params.userId;
  return (
    <div className="flex">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-13 left-1 z-50 p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <List  size={24} />}
      </button>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 left-0 w-60 bg-white dark:bg-gray-800 p-5 pt-14 transform transition-transform duration-300 ease-in-out">
            <div className="space-y-4 pt-12">
              <Link to={`/user/${userId}`} className="flex items-center gap-2">
                <LayoutDashboard size={22} />
                <h1>Dashboard</h1>
              </Link>
              <Link to="quizzes" className="flex items-center gap-2">
                <Brain size={22} />
                <h1>Quizzes</h1>
              </Link>
              <Link to="settings" className="flex items-center gap-2">
                <Settings size={22} />
                <h1>Settings</h1>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden bg-gray-950 text-white lg:block w-[250px] sm:w-[250px] space-y-8 border-r border-gray-800 dark:border-gray-700 p-12 px-5 sticky top-0 h-screen">
        <div className="space-y-4">
          <Link to={`/user/${userId}`} className="flex items-center gap-2">
            <LayoutDashboard size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to="quizzes" className="flex items-center gap-2">
            <Brain size={22} />
            <h1>Quizzes</h1>
          </Link>
          <Link to="settings" className="flex items-center gap-2">
            <Settings size={22} />
            <h1>Settings</h1>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}