import {
  FileText,
  CalendarPlus,
  MessageCircle,
  Bot,
} from "lucide-react";

const actions = [
  {
    icon: <FileText size={22} />,
    title: "Assignments",
    description: "View all homework",
  },
  {
    icon: <CalendarPlus size={22} />,
    title: "Attendance",
    description: "Check today's attendance",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Messages",
    description: "Open inbox",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Assistant",
    description: "Ask anything",
  },
];

export default function AnnouncementsCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="border border-gray-200 rounded-xl p-5 text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-blue-600 mb-3">
              {action.icon}
            </div>

            <h3 className="font-semibold">
              {action.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {action.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}