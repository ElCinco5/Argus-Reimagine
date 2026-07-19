import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Learning from "../pages/Learning";
import Attendance from "../pages/Attendance";
import Calendar from "../pages/Calendar";
import Messages from "../pages/Messages";
import AIAssistant from "../pages/AIAssistant";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/ai" element={<AIAssistant />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}