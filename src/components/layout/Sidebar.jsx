import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MessageSquare,
  Bot,
  User,
  Settings,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BookOpen, label: "Learning", path: "/learning" },
  { icon: GraduationCap, label: "Attendance", path: "/attendance" },
  { icon: CalendarDays, label: "Calendar", path: "/calendar" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: Bot, label: "AI Assistant", path: "/ai" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen flex flex-col shadow-sm">

      <div className="p-6 border-b border-gray-200">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
            <Sparkles size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Argus
            </h1>

            <p className="text-sm text-gray-500">
              Reimagine
            </p>
          </div>

        </div>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map(({ icon: Icon, label, path }) => (

          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100 hover:translate-x-1"
              }`
            }
          >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
          </NavLink>

        ))}

      </nav>

      <div className="border-t border-gray-200 p-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>

            <p className="font-semibold">
              Apratim
            </p>

            <p className="text-sm text-gray-500">
              Student
            </p>

          </div>

        </div>

        <p className="text-xs text-gray-400 mt-5">
          Argus Reimagine • v0.1 Prototype
        </p>

      </div>

    </aside>
  );
}