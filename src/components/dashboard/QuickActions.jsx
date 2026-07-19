import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MessageSquare,
  Bot,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Learning",
    icon: BookOpen,
    path: "/learning",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Attendance",
    icon: GraduationCap,
    path: "/attendance",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Calendar",
    icon: CalendarDays,
    path: "/calendar",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    path: "/messages",
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "AI Assistant",
    icon: Bot,
    path: "/ai",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Profile",
    icon: User,
    path: "/profile",
    color: "bg-slate-100 text-slate-700",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        {actions.map(({ title, icon: Icon, path, color }) => (

          <Link
            key={title}
            to={path}
            className="group"
          >

            <div className="rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">

              <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center ${color}`}>

                <Icon size={26} />

              </div>

              <h3 className="mt-4 font-semibold group-hover:text-indigo-600 transition">
                {title}
              </h3>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}