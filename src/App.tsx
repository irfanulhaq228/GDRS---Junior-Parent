import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

import Signin from "./Pages/Auth/Signin";
import ForgetPassword from "./Pages/Auth/ForgetPassword";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Setting/Setting";
import { useSelector } from "react-redux";
import { RootState } from "./Features/Features";
import ResetPassword from "./Pages/Auth/ResetPassword";
import CreatedTasks from "./Pages/CreatedTasks/CreatedTasks";
import CreatedTeams from "./Pages/CreatedTeams/CreatedTeams";

function AppContent() {
  const location = useLocation();
  const showSidebar =
    location.pathname !== "/" &&
    location.pathname !== "/forget-password" &&
    location.pathname !== "/reset-password";
  const darkMode = useSelector((state: RootState) => state.darkMode);

  return (
    <div
      className={`${
        !darkMode ? "bg-[#F1F5F9]" : "bg-[#24303F]"
      } flex min-h-screen`}
    >
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/created-teams" element={<CreatedTeams />} />
          <Route path="/created-tasks" element={<CreatedTasks />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
