import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MessageSquare,
  Bot,
  User,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Learning" },
  { icon: GraduationCap, label: "Attendance" },
  { icon: CalendarDays, label: "Calendar" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Bot, label: "AI Assistant" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">
          Argus
        </h1>
        <p className="text-sm text-gray-500">
          Reimagine
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
              label === "Dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}