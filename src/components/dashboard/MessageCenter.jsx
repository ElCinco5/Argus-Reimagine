import {
  Bell,
  Bot,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

const messages = [
  {
    title: "Physics Teacher",
    subtitle: "Worksheet 5 uploaded",
    time: "10 min ago",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "School Administration",
    subtitle: "Holiday circular released",
    time: "1 hour ago",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Argus AI",
    subtitle: "Your study plan is ready.",
    time: "Just now",
    icon: Bot,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Announcements",
    subtitle: "Science Exhibition next week.",
    time: "Yesterday",
    icon: Bell,
    color: "bg-amber-100 text-amber-600",
  },
];

export default function MessageCenter() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Message Center
        </h2>

        <button className="text-indigo-600 hover:underline">
          View All
        </button>

      </div>

      <div className="space-y-4">

        {messages.map(({ title, subtitle, time, icon: Icon, color }) => (

          <div
            key={title}
            className="flex gap-4 items-start p-4 rounded-xl hover:bg-slate-50 transition cursor-pointer"
          >

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
            >
              <Icon size={22} />
            </div>

            <div className="flex-1">

              <div className="flex justify-between">

                <h3 className="font-semibold">
                  {title}
                </h3>

                <span className="text-xs text-gray-400">
                  {time}
                </span>

              </div>

              <p className="text-gray-500 mt-1">
                {subtitle}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}